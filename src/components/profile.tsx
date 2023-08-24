import Image from "next/image";
import { getUser } from "@/service/user";

export default async function UserProfile() {
  const user = await getUser();

  if (!user) {
    return;
  }

  const { image, name, position, introduction } = user;

  return (
    <div>
      <Image src={image} alt={name} width={200} height={200} />
      <p>{name}</p>
      <p>{position}</p>
      <p>{introduction}</p>
    </div>
  );
}
