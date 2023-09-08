import { Post } from "@/service/posts";
import Image from "next/image";

type PostPsops = {
  posts: Post[];
};

export default async function PostItem({ posts }: PostPsops) {
  return (
    <>
      {posts.map(({ title, description, date, category, path }) => (
        <li key={title} className="w-65 drop-shadow-md">
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
        </li>
      ))}
    </>
  );
}
