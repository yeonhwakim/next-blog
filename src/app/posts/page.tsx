import BasicPosts from "@/components/basicPosts";
import { getPosts } from "@/service/posts";

const categories = ["all", "my story", "javascript", "backend"];

export default async function page() {
  const posts = await getPosts();

  return (
    <>
      <div>
        <BasicPosts posts={posts} />
      </div>
      <nav>
        <ul>
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </nav>
    </>
  );
}
