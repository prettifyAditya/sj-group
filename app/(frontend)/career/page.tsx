import type { Metadata } from "next";
import CareerPage from "@/components/frontendcomponent/pages/career";
export const metadata: Metadata = {
  title: "Career | SJ Group",
  description: "SJ Group website",
};

export default function Career() {
  return <CareerPage />;
}
