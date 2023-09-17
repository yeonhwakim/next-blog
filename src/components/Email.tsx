"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerProps } from "./Banner";

type Email = {
  from: string;
  subject: string;
  message: string;
};

export default function Email() {
  const [form, setForm] = useState<Email>({
    from: "",
    subject: "",
    message: "",
  });
  const [banner, setBanner] = useState<BannerProps | null>(null);

  const { from, subject, message } = form;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setBanner({ message: "성공!!", state: "success" });
    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };

  return (
    <section className="w-full max-w-md m-auto">
      {banner && <Banner banner={banner} />}
      <div className="w-full flex flex-col rounded-md bg-emerald-600 p-4">
        <form className="flex flex-col items-start" onSubmit={onSubmit}>
          <label htmlFor="from" className="font-bold text-white">
            Your Email
          </label>
          <input
            className="w-full p-1 my-2 outline-0"
            type="email"
            name="from"
            id="from"
            required
            autoFocus
            value={from}
            onChange={onChange}
          />
          <label htmlFor="subject" className="font-bold text-white">
            Subject
          </label>
          <input
            className="w-full p-1 my-2 outline-0"
            type="text"
            name="subject"
            id="subject"
            required
            value={subject}
            onChange={onChange}
          />
          <label htmlFor="message" className="font-bold text-white">
            Message
          </label>
          <textarea
            className="w-full p-1 my-2 outline-0 resize-none"
            rows={5}
            name="message"
            id="message"
            required
            value={message}
            onChange={onChange}
          ></textarea>
          <button
            className="w-full mt-2 rounded-md bg-yellow-300 py-2 font-semibold text-lg"
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </section>
  );
}
