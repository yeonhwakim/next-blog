import { getDetailPosts, getPosts } from "@/service/posts";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostDetail({ params: { slug } }: Props) {
  const posts = await getDetailPosts(slug);

  const markup = () => {
    return { __html: posts };
  };

  return (
    <>
      <div dangerouslySetInnerHTML={markup()}></div>
    </>
  );
}

// SSG
export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({ slug: post.path }));
}
