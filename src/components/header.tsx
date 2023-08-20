import Link from "next/link";

export default function header() {
  return (
    <div>
      <Link href="/">_YEONHWA_BLOG_</Link>
      <nav>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/posts">posts</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </div>
  );
}
