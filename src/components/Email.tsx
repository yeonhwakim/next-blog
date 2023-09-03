"use client";

import { useState } from "react";

export type EmailProps = {
  sendEmailhandler: any;
};

export default function Email({ sendEmailhandler }: EmailProps) {
  const initialInputValues: { [key: string]: string } = {
    email: "",
    subject: "",
    message: "",
  };

  const [inputValues, setInputValues] = useState(initialInputValues);
  const { email, subject, message } = inputValues;

  const onChangeInput = (event: any) => {
    const { value, name: inputName } = event.target;
    setInputValues({ ...inputValues, [inputName]: value });
  };

  return (
    <div className="w-6/12 m-auto rounded-md bg-emerald-600 p-4">
      <form
        className="flex flex-col items-start"
        onSubmit={(e) =>
          sendEmailhandler({ event: e, email, subject, message })
        }
      >
        <label className="font-bold text-white">Your Email</label>
        <input
          className="w-full p-1 my-2 outline-0"
          type="email"
          name="email"
          value={email}
          onChange={onChangeInput}
        />
        <label className="font-bold text-white">Subject</label>
        <input
          className="w-full p-1 my-2 outline-0"
          type="text"
          name="subject"
          value={subject}
          onChange={onChangeInput}
        />
        <label className="font-bold text-white">Message</label>
        <textarea
          className="w-full p-1 my-2 outline-0 resize-none"
          rows={5}
          name="message"
          value={message}
          onChange={onChangeInput}
        ></textarea>
        <button
          className="w-full mt-2 rounded-md bg-yellow-300 py-2 font-semibold text-lg"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
}
