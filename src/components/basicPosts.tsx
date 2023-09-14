import { Post } from "@/service/posts";
import PostItem from "./post";

type PostsProps = {
  posts: Post[];
};

export default function BasicPosts({ posts }: PostsProps) {
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {posts.map((post) => (
          <li key={post.path}>
            <PostItem post={post} />
          </li>
        ))}
      </ul>
    </>
  );
}
