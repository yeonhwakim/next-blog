import { Post } from "@/service/posts";
import Image from "next/image";

type PostPsops = {
  posts: Post[];
};

export default async function PostItem({ posts }: PostPsops) {
  return (
    <>
      {posts.map(({ title, description, date, category, path }) => (
        <li key={title}>
          <Image
            src={`/images/posts/${path}.png`}
            alt={title}
            width={200}
            height={100}
          />
          <div>
            <p>{date}</p>
            <div>
              <p>{title}</p>
              <p>{description}</p>
              <span>{category}</span>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}
