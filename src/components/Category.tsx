type FilterablePostsProps = {
  selected: string;
  categories: string[];
  onClick: (category: string) => void;
};

export default function Category({
  selected,
  categories,
  onClick,
}: FilterablePostsProps) {
  return (
    <section className="p-2">
      <h2 className="text-lg font-bold border-b border-sky-500 mb-2">
        Category
      </h2>
      <ul className="text-center">
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${
              category === selected && "text-sky-600"
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
