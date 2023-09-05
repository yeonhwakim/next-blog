import { Post } from "@/service/posts";
import PostItem from "./post";

type PostsProps = {
  posts: Post[];
};

export default async function CarouselPosts({ posts }: PostsProps) {
  return (
    <>
      <ul>
        <PostItem posts={posts} />
      </ul>
    </>
  );
}
