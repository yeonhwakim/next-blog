import FilterablePosts from "@/components/FilterablePosts";
import { getPosts } from "@/service/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "연화의 끄적끄적 블로그 포스트",
};

export default async function page() {
  const posts = await getPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <section className="m-4">
      <FilterablePosts posts={posts} categories={categories} />
    </section>
  );
}
