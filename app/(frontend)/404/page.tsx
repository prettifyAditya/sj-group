import type { Metadata } from "next";
import ThankyouPage from "@/components/frontendcomponent/organisms/ThankyouPage";
export const metadata: Metadata = {
  title: "404 | SJ Group",
  description: "SJ Group website",
};

export default function ErrorPage() {
  return <ThankyouPage title="404" desc="Oops, Something went wrong." />;
}
