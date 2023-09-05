type homeTitleProps = {
  title: string;
};

export default function HomeTitle({ title }: homeTitleProps) {
  return <p>{title}</p>;
}
