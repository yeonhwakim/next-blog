import UserProfile from "@/components/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "연화의 커리어 소개",
};

export default function page() {
  return (
    <>
      <UserProfile isAbout={true} />
    </>
  );
}
