import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

type PostPsops = {
  post: Post;
};

export default async function PostItem({ post }: PostPsops) {
  if (!post) {
    return;
  }

  const { title, description, date, category, path } = post;

  return (
    <>
      <li>
        <Link href={`/posts/${path}`}>
          <article className="rounded-md overflow-hidden shadow-lg">
            <Image
              src={`/images/posts/${path}.png`}
              alt={title}
              width={500}
              height={500}
            />
            <div className="flex flex-col items-center p-4">
              <time className="mb-2 text-sm self-end">{date}</time>
              <h3 className="text-center text-lg font-bold">{title}</h3>
              <p className="w-full truncate text-center my-1">{description}</p>
              <span className="text-center text-xs px-3 py-1 mt-1 rounded-lg bg-yellow-200">
                {category}
              </span>
            </div>
          </article>
        </Link>
      </li>
    </>
  );
}
