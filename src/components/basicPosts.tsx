import { Post } from "@/service/posts";
import PostItem from "./post";

type PostsProps = {
  posts: Post[];
};

export default async function BasicPosts({ posts }: PostsProps) {
  return (
    <>
      <ul className="grid grid-cols-4 gap-2">
        <PostItem posts={posts} />
      </ul>
    </>
  );
}
