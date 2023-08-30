import path from "path";
import { promises as fs } from "fs";

export type User = {
  name: string;
  image: string;
  position: string;
  introduction: string;
  description: string;
  email: string;
  contact: any;
};

export async function getUser(): Promise<User | undefined> {
  const filePath = path.join(process.cwd(), "data", "user.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}
