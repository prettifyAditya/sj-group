import type { Metadata } from "next";
import AboutUsPage from "@/components/frontendcomponent/pages/about-us";
export const metadata: Metadata = {
  title: "About Us | SJ Group",
  description: "SJ Group website",
};

export default function AboutUs() {
  return <AboutUsPage />;
}
