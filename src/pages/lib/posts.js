import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const date = matterResult.data.date
      ? matterResult.data.date.toString()
      : "";
    return {
      id,
      ...matterResult.data,
      date,
    };
  });
  return allPostsData.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPaginatedPostsData(page = 1, limit = 5) {
  const allPosts = getSortedPostsData();
  const start = (page - 1) * limit;
  const paginatedPosts = allPosts.slice(start, start + limit);
  return {
    posts: paginatedPosts,
    total: allPosts.length,
  };
}

export function getLatestPosts(limit = 3) {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id: fileName.replace(/\.md$/, ""),
      ...matterResult.data,
      content: matterResult.content,
      date: matterResult.data.date ? matterResult.data.date.toString() : "", // Ensure date is a string
    };
  });
  const sortedPosts = allPosts
    .filter((post) => post.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
  return sortedPosts;
}
