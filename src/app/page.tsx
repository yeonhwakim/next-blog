import HomeTitle from "@/components/homeTitle";
import PostByFeatured from "@/components/postByFeatured";
import UserProfile from "@/components/profile";

export default async function Home() {
  return (
    <section>
      <UserProfile isAbout={false} />
      <HomeTitle title={"Featured Posts"} />
      <PostByFeatured isFeatured={false} isCarousel={false} />
      <HomeTitle title={"You may like"} />
      <PostByFeatured isFeatured={true} isCarousel={true} />
    </section>
  );
}
