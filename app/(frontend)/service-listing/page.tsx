import type { Metadata } from "next";
import ServiceListingPage from "@/components/frontendcomponent/pages/service-listing";
export const metadata: Metadata = {
  title: "Service Listing | SJ Group",
  description: "SJ Group website",
};

export default function ServiceListing() {
  return <ServiceListingPage />;
}
