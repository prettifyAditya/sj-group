import type { Metadata } from "next";
import PrivacyPolicyPage from "@/components/frontendcomponent/pages/privacy-policy";
export const metadata: Metadata = {
  title: "Privacy Policy | SJ Group",
  description: "SJ Group website",
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}
