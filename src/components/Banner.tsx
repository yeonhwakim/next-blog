export type BannerProps = {
  message: string;
  state: "success" | "error";
};

export default function Banner({
  banner: { message, state },
}: {
  banner: BannerProps;
}) {
  const isSuccess = state === "success";
  const icon = isSuccess ? "✅" : "🔥";
  return (
    <div
      className={`p-2 ${
        isSuccess ? "bg-green-300" : "bg-red-300"
      } mb-4 rounded-xl`}
    >{`${icon} ${message}`}</div>
  );
}
