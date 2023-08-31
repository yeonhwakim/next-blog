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
          <li className="text-3xl" key={item.sns}>
            {icons[item.sns]}
          </li>
        ))}
      </ul>
      <p className="my-8 text-2xl font-bold">Or send me an email</p>
      <div className="w-6/12 m-auto rounded-md bg-emerald-600 p-4">
        <form className="flex flex-col items-start" action="">
          <label className="font-bold text-white">Your Email</label>
          <input className="w-full p-1 my-2 outline-0" type="email" />
          <label className="font-bold text-white">Subject</label>
          <input className="w-full p-1 my-2 outline-0" type="text" />
          <label className="font-bold text-white">Message</label>
          <textarea
            className="w-full p-1 my-2 outline-0 resize-none"
            rows={5}
          ></textarea>
          <button className="w-full mt-2 rounded-md bg-yellow-300 py-2 font-semibold text-lg">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
