import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type AdjacentPostCartProps = {
  post: Post;
  type: "prev" | "next";
};

export default function AdjacentPostCard({
  post: { path, title, description },
  type,
}: AdjacentPostCartProps) {
  return (
    <Link href={`/posts/${path}`}>
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
      />
      <div>
        {type === "prev" && <FaArrowLeft />}
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        {type === "next" && <FaArrowRight />}
      </div>
    </Link>
  );
}
