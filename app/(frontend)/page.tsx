import type { Metadata } from "next";
import HomePage from "@/components/frontendcomponent/pages/homepage";

export const metadata: Metadata = {
  title: "Home | SJ Group",
  description: "SJ Group website",
};

export default function Home() {
  return <HomePage />;
}
