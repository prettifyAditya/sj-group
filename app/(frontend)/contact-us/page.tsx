import type { Metadata } from "next";
import ContactUsPage from "@/components/frontendcomponent/pages/contact-us";
export const metadata: Metadata = {
  title: "Contact Us | SJ Group",
  description: "SJ Group website",
};

export default function ContactUs() {
  return <ContactUsPage />;
}
