import path from "path";
import { promises as fs } from "fs";

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & { content: string };

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data).sort((a: { date: string }, b: { date: string }) =>
    a.date > b.date ? -1 : 1
  );
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const posts = await getPosts();
  const postsByCategory = posts.filter((post) => post.category === category);
  return postsByCategory;
}

export async function getPostsByFeatured(isFeatured: boolean): Promise<Post[]> {
  const posts = await getPosts();
  const postsByFeatured = posts.filter((post) => post.featured === isFeatured);
  return postsByFeatured;
}

export async function getDetailPosts(detailPath: string): Promise<PostData> {
  const filePath = path.join(
    process.cwd(),
    "data",
    "posts",
    `${detailPath}.md`
  );
  const allPosts = await getPosts();
  const metaData = allPosts.find((post) => post.path === detailPath);
  if (!metaData) throw new Error(`${detailPath}에 해당하는 파일이 없습니다.`);
  const content = await fs.readFile(filePath, "utf-8");
  return { ...metaData, content };
}
