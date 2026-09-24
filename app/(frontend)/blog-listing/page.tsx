import type { Metadata } from "next";
import BlogListingPage from "@/components/frontendcomponent/pages/blog-listing";
export const metadata: Metadata = {
  title: "Blog Listing | SJ Group",
  description: "SJ Group website",
};

export default function BlogListing() {
  return <BlogListingPage />;
}
