import type { Metadata } from "next";
import ProjectListingPage from "@/components/frontendcomponent/pages/project-listing";
export const metadata: Metadata = {
  title: "Project Listing | SJ Group",
  description: "SJ Group website",
};

export default function ProjectListing() {
  return <ProjectListingPage />;
}
