import ProjectBanner from "./ProjectBanner";
import ProjectOverview from "./ProjectOverview";
import MoreProject from "./MoreProject";
import "@/uploads/sass/project/project.css";
import GallerySection from "./GallerySection";

export default function ProjectDetailsPage() {
  return (
    <main>
      <ProjectBanner
        imgSrc="/images/project/project-banner.jpg"
        title="Dhudhichua OCP"
        location="Amrapara, Pakur District, Jharkhand, India"
        status="Ongoing"
        price="₹ 12,000 Cr"
      />
      <ProjectOverview />
      <GallerySection />
      <MoreProject />
    </main>
  );
}
