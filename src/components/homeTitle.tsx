type homeTitleProps = {
  title: string;
};

export default function HomeTitle({ title }: homeTitleProps) {
  return <h2 className="font-bold text-2xl py-4">{title}</h2>;
}
