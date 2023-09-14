import BasicPosts from "@/components/basicPosts";
import { getPosts } from "@/service/posts";

export default async function page() {
  const posts = await getPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <div className="flex flex-row">
      <div>
        <BasicPosts posts={posts} />
      </div>
      <nav className="w-1/5 flex flex-col items-center ">
        <p className="font-bold underline decoration-sky-500">Category</p>
        <ul className="p-2 text-center">
          {categories.map((category) => (
            <li
              className="p-1 decoration-sky-500 hover:underline cursor-pointer"
              key={category}
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
