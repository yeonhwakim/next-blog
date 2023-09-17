import Email from "@/components/Email";
import { getUser } from "@/service/user";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";

const icons: { [key: string]: any } = {
  git: <BsGithub />,
  linkedIn: <BsLinkedin />,
  facebook: <BsFacebook />,
};

export default async function page() {
  const user = await getUser();

  if (!user) {
    return;
  }

  const { email, contact } = user;

  return (
    <div className="p-4 text-center">
      <p className="text-2xl font-bold">Contact me</p>
      <p className="mb-2 text-sm">{email}</p>
      <ul className="flex items-center justify-center gap-4">
        {contact.map((item: any) => (
          <a
            className="text-3xl hover:text-yellow-400"
            key={item.sns}
            target="_blank"
            rel="noreferrer"
            href={item.link}
          >
            {icons[item.sns]}
          </a>
        ))}
      </ul>
      <p className="my-8 text-2xl font-bold">Or send me an email</p>
      <Email />
    </div>
  );
}
