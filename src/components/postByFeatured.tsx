import { getPostsByFeatured } from "@/service/posts";

import BasicPosts from "./basicPosts";
import CarouselPosts from "./carouselPosts";

type PostByFeaturedProps = {
  isFeatured: boolean;
  isCarousel: boolean;
};

export default async function PostByFeatured({
  isFeatured,
  isCarousel,
}: PostByFeaturedProps) {
  const posts = await getPostsByFeatured(isFeatured);

  return (
    <>
      {isCarousel ? (
        <CarouselPosts posts={posts} />
      ) : (
        <BasicPosts posts={posts} />
      )}
    </>
  );
}
