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
    <ul>
      {categories.map((category) => (
        <li key={category} onClick={() => onClick(category)}>
          {category}
        </li>
      ))}
    </ul>
  );
}
