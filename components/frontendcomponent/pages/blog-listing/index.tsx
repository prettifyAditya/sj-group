import HeroBanner from "../../organisms/HeroBanner";
import BlogItems from "./BlogItems";
import "@/uploads/sass/blogs/blogs.css";

export default function BlogListingPage() {
  return (
    <main>
      <HeroBanner
        classname="blog_listing"
        heading="Blogs"
        desc="Insights, expertise, and perspectives shaping the future of mining and infrastructure."
        mediaSrc="/images/other/blog-banner.jpg"
      />
      <BlogItems />
    </main>
  );
}
