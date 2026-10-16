import fs from "fs";
import path from "path";
import { google } from "googleapis";
import xml2js from "xml2js";

const PUBLIC_DIR = path.resolve("./public");
const PRIMARY_SITEMAP = path.join(PUBLIC_DIR, "sitemap.xml");

async function parseSitemapFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.error(`⚠️ File not found: ${filePath}`);
      return [];
    }

    const xmlText = fs.readFileSync(filePath, "utf8");
    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(xmlText);

    let urls = [];

    // 1. Handle regular URL set (<urlset><url><loc>...</loc></url></urlset>)
    if (result.urlset && result.urlset.url) {
      urls = result.urlset.url.map((entry) => entry.loc[0].trim());
    }
    // 2. Handle Sitemap Index (<sitemapindex><sitemap><loc>...</loc></sitemap></sitemapindex>)
    else if (result.sitemapindex && result.sitemapindex.sitemap) {
      const childSitemaps = result.sitemapindex.sitemap.map((entry) =>
        entry.loc[0].trim(),
      );

      for (const childUrl of childSitemaps) {
        // Extract filename from URL (e.g. "https://infused.agency/sitemap-services.xml" -> "sitemap-services.xml")
        const fileName = path.basename(new URL(childUrl).pathname);
        const childFilePath = path.join(PUBLIC_DIR, fileName);

        const childUrls = await parseSitemapFile(childFilePath);
        urls.push(...childUrls);
      }
    }

    return urls;
  } catch (error) {
    console.error(`❌ Error reading ${filePath}:`, error.message);
    return [];
  }
}

async function notifyGoogle() {
  const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!rawKey) {
    console.log(
      "⚠️ Skipping Google Indexing: GOOGLE_SERVICE_ACCOUNT_KEY not set.",
    );
    return;
  }

  const credentials = JSON.parse(rawKey);

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/indexing"],
  });

  const indexing = google.indexing({ version: "v3", auth });

  console.log(`🔍 Reading sitemap structure from ${PRIMARY_SITEMAP}...`);
  const urlsToSubmit = await parseSitemapFile(PRIMARY_SITEMAP);

  // Remove duplicates if any exist across sitemaps
  const uniqueUrls = [...new Set(urlsToSubmit)];

  if (uniqueUrls.length === 0) {
    console.log("⚠️ No URLs extracted from sitemaps.");
    return;
  }

  // Google limits API calls to 200 URLs per day per service account
  const maxUrls = Math.min(uniqueUrls.length, 200);
  console.log(
    `🚀 Found ${uniqueUrls.length} unique URLs across all sub-sitemaps.`,
  );
  console.log(`Submitting ${maxUrls} URLs to Google Indexing API...`);

  for (let i = 0; i < maxUrls; i++) {
    const url = uniqueUrls[i];
    try {
      await indexing.urlNotifications.publish({
        requestBody: { url, type: "URL_UPDATED" },
      });
      console.log(`✅ [${i + 1}/${maxUrls}] Submitted: ${url}`);
    } catch (err) {
      console.error(`❌ [${i + 1}/${maxUrls}] Error for ${url}:`, err.message);
    }
  }
}

notifyGoogle();
