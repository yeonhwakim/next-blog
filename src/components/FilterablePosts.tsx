"use client";

import { Post } from "@/service/posts";
import { useState } from "react";
import BasicPosts from "./basicPosts";
import Category from "./Category";

type FilterablePostsProps = {
  posts: Post[];
  categories: string[];
};
const All_POSTS = "all posts";

export default function FilterablePosts({
  posts,
  categories,
}: FilterablePostsProps) {
  const [selected, setSelected] = useState(All_POSTS);
  const filteredPosts =
    selected === All_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className="flex">
      <BasicPosts posts={filteredPosts} />
      <Category
        selected={selected}
        categories={[All_POSTS, ...categories]}
        onClick={setSelected}
      />
    </section>
  );
}
