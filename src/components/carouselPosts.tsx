import { Post } from "@/service/posts";
import PostItem from "./post";

type PostsProps = {
  posts: Post[];
};

export default async function CarouselPosts({ posts }: PostsProps) {
  return (
    <>
      <ul className="flex flex-nowrap gap-2 overflow-auto">
        {posts.map((post) => (
          <PostItem key={post.path} post={post} />
        ))}
      </ul>
    </>
  );
}
