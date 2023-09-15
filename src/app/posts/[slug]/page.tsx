import MarkdownViewer from "@/components/MarkdownViewer";
import { getDetailPosts, getPosts } from "@/service/posts";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostDetail({ params: { slug } }: Props) {
  const { title, content } = await getDetailPosts(slug);

  return (
    <section>
      <p>{title}</p>
      <MarkdownViewer content={content} />
    </section>
  );
}
