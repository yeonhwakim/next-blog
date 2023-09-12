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
      <li className="w-65 drop-shadow-md">
        <Link href={`/posts/${path}`}>
          <Image
            src={`/images/posts/${path}.png`}
            alt={title}
            width={500}
            height={500}
          />
          <div className="p-2">
            <p className="text-right mb-2 text-xs">{date}</p>
            <div className="text-center text-sm">
              <p className="font-bold text-sm">{title}</p>
              <p className="text-sm my-1">{description}</p>
              <span className="text-xs px-3 py-1 rounded-full bg-yellow-200">
                {category}
              </span>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}
