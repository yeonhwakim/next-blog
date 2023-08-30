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
    <div>
      <p>Contact me</p>
      <p>{email}</p>
      <ul>
        {contact.map((item: any) => (
          <li key={item.sns}>{icons[item.sns]}</li>
        ))}
      </ul>
      <p>Or send me an email</p>
      <div>
        <form action="">
          <label>Your Email</label>
          <input type="email" />
          <label>Subject</label>
          <input type="email" />
          <label>Message</label>
          <input type="email" />
          <button>submit</button>
        </form>
      </div>
    </div>
  );
}
