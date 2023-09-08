type homeTitleProps = {
  title: string;
};

export default function HomeTitle({ title }: homeTitleProps) {
  return <p className="font-bold text-2xl py-4">{title}</p>;
}
