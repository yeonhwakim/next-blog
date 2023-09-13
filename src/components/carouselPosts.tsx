import { Post } from "@/service/posts";
import PostItem from "./post";
import MultiCarousel from "./MultiCarousel";

type PostsProps = {
  posts: Post[];
};

export default async function CarouselPosts({ posts }: PostsProps) {
  return (
    <MultiCarousel>
      {posts.map((post) => (
        <li key={post.path}>
          <PostItem post={post} />
        </li>
      ))}
    </MultiCarousel>
  );
}
