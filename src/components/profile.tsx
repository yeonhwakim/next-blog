import Image from "next/image";
import { getUser } from "@/service/user";

type UserProfileProps = {
  isAbout: boolean;
};

export default async function UserProfile({ isAbout }: UserProfileProps) {
  const user = await getUser();

  if (!user) {
    return;
  }

  const { image, name, position, introduction, description } = user;

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Image
        src={image}
        alt={name}
        width={170}
        height={170}
        className="rounded-full"
      />
      <p className="mt-2 font-bold text-lg">{name}</p>
      <p className="font-semibold text-md">{position}</p>
      <p className="bg-yellow text-sm">{introduction}</p>
      <button className="mt-2 py-1 px-3 bg-yellow-300 rounded-md text-sm font-semibold">
        contact me!
      </button>
      {isAbout && (
        <div
          className="w-8/12 p-8 m-4 bg-neutral-300 text-center rounded-md"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      )}
    </div>
  );
}
