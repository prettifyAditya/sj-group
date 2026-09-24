import type { Metadata } from "next";
import ProjectDetailsPage from "@/components/frontendcomponent/pages/project-detail";
export const metadata: Metadata = {
  title: "Project Details | SJ Group",
  description: "SJ Group website",
};

export default function ProjectDetails() {
  return <ProjectDetailsPage />;
}
