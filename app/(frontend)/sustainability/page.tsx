import type { Metadata } from "next";
import SustainabilityPage from "@/components/frontendcomponent/pages/sustainability";
export const metadata: Metadata = {
  title: "Sustainability | SJ Group",
  description: "SJ Group website",
};

export default function Sustainability() {
  return <SustainabilityPage />;
}
