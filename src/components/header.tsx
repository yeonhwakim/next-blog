import Link from "next/link";
const menus = [
  {
    pathName: "home",
    path: "/",
  },
  {
    pathName: "about",
    path: "/about",
  },
  {
    pathName: "posts",
    path: "/posts",
  },
  {
    pathName: "contact",
    path: "/contact",
  },
];

export default function header() {
  return (
    <div className="p-4 flex item-center justify-between">
      <Link href="/" className="text-xl font-bold">
        _YEONHWA_BLOG_
      </Link>
      <nav className="flex gap-3">
        {menus.map(({ pathName, path }) => (
          <Link href={path} className="text-lg" key={path}>
            {pathName}
          </Link>
        ))}
      </nav>
    </div>
  );
}
