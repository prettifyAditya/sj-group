import type { Metadata } from "next";
import ServiceDetailsPage from "@/components/frontendcomponent/pages/service-details";
export const metadata: Metadata = {
  title: "Service Details | SJ Group",
  description: "SJ Group website",
};

export default function ServiceDetails() {
  return <ServiceDetailsPage />;
}
