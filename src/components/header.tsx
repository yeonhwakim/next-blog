import Link from "next/link";

export default function header() {
  return (
    <div className="p-4 flex item-center justify-between">
      <Link href="/" className="text-xl font-bold">
        _YEONHWA_BLOG_
      </Link>
      <nav className="flex gap-3">
        <Link href="/" className="text-lg">
          home
        </Link>
        <Link href="/about" className="text-lg">
          about
        </Link>
        <Link href="/posts" className="text-lg">
          posts
        </Link>
        <Link href="/contact" className="text-lg">
          contact
        </Link>
      </nav>
    </div>
  );
}
