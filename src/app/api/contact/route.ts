import { sendEmail } from "@/service/Email";
import * as yup from "yup";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();
  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: "메일 보내기 실패" }), {
      status: 400,
    });
  }

  return sendEmail(body)
    .then(() => {
      return new Response(JSON.stringify({ message: "메일 보내기 성공" }), {
        status: 200,
      });
    })
    .catch(() => {
      return new Response(JSON.stringify({ message: "메일 보내기 실패" }), {
        status: 500,
      });
    });
}
