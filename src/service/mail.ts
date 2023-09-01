const nodemailer = require("nodemailer");

export type Email = {
  from: string;
  subject: string;
  text: string;
  html: string;
};

const transporter = nodemailer.createTransport({
  service: "gmail", // 메일 보내는 곳
  prot: 587,
  host: "smtp.gmlail.com",
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.REACT_APP_MY_EMAIL, // 보내는 메일의 주소
    pass: process.env.REACT_APP_MY_EMAIL_PASSWORD, // 보내는 메일의 비밀번호
  },
});

export function sendEmail({ from, subject, text, html }: Email) {
  async function main() {
    const info = await transporter.sendMail({
      from, // sender address
      to: process.env.REACT_APP_MY_EMAIL, // list of receivers
      subject, // Subject line
      text, // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
  }

  main().catch(console.error);
}
