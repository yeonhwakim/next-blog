import FilterablePosts from "@/components/FilterablePosts";
import { getPosts } from "@/service/posts";

export default async function page() {
  const posts = await getPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <section className="m-4">
      <FilterablePosts posts={posts} categories={categories} />
    </section>
  );
}
