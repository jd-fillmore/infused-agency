import fs from "fs";
import path from "path";
import { google } from "googleapis";
import xml2js from "xml2js";

const PUBLIC_DIR = path.resolve("./public");
const PRIMARY_SITEMAP = path.join(PUBLIC_DIR, "sitemap.xml");
const TRACKER_FILE = path.resolve("./submitted-urls.json");

// Load already-submitted URLs
function getSubmittedUrls() {
  if (fs.existsSync(TRACKER_FILE)) {
    try {
      const data = fs.readFileSync(TRACKER_FILE, "utf8");
      return new Set(JSON.parse(data));
    } catch {
      return new Set();
    }
  }
  return new Set();
}

// Save newly submitted URLs
function saveSubmittedUrls(submittedSet) {
  fs.writeFileSync(
    TRACKER_FILE,
    JSON.stringify(Array.from(submittedSet), null, 2),
    "utf8",
  );
}

async function parseSitemapFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) return [];

    const xmlText = fs.readFileSync(filePath, "utf8");
    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(xmlText);

    let urls = [];

    if (result.urlset && result.urlset.url) {
      urls = result.urlset.url.map((entry) => entry.loc[0].trim());
    } else if (result.sitemapindex && result.sitemapindex.sitemap) {
      const childSitemaps = result.sitemapindex.sitemap.map((entry) =>
        entry.loc[0].trim(),
      );

      for (const childUrl of childSitemaps) {
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
  const allUrls = await parseSitemapFile(PRIMARY_SITEMAP);
  const uniqueUrls = [...new Set(allUrls)];

  const submittedHistory = getSubmittedUrls();

  // Filter out URLs that have already been submitted
  const newUrls = uniqueUrls.filter((url) => !submittedHistory.has(url));

  if (newUrls.length === 0) {
    console.log(
      "✨ All sitemap URLs have already been submitted. Skipping API calls!",
    );
    return;
  }

  // Google limits API calls to 200 URLs per day
  const maxUrls = Math.min(newUrls.length, 200);
  console.log(`🚀 Found ${newUrls.length} new unsubmitted URLs.`);
  console.log(`Submitting ${maxUrls} URLs to Google Indexing API...`);

  for (let i = 0; i < maxUrls; i++) {
    const url = newUrls[i];
    try {
      await indexing.urlNotifications.publish({
        requestBody: { url, type: "URL_UPDATED" },
      });
      submittedHistory.add(url);
      console.log(`✅ [${i + 1}/${maxUrls}] Submitted: ${url}`);
    } catch (err) {
      console.error(`❌ [${i + 1}/${maxUrls}] Error for ${url}:`, err.message);
    }
  }

  // Persist updated history
  saveSubmittedUrls(submittedHistory);
  console.log("💾 Updated submitted-urls.json history file.");
}

notifyGoogle();
