import BlogCol from "../../molecules/BlogCol";

const blogsData = [
  {
    linkHref: "/blog-details",
    mediaSrc: "/images/other/blog1.jpg",
    title: "The Complete Mining Process: From Planning to Production",
    date: "25 August 2026",
  },
  {
    linkHref: "/blog-details",
    mediaSrc: "/images/other/blog2.jpg",
    title: "Building a Strong Safety Culture in Mining Operations",
    date: "25 August 2026",
  },
  {
    linkHref: "/blog-details",
    mediaSrc: "/images/other/blog3.jpg",
    title: "How Mining Companies Can Reduce Environmental Impact",
    date: "25 August 2026",
  },
  {
    linkHref: "/blog-details",
    mediaSrc: "/images/other/blog1.jpg",
    title: "The Complete Mining Process: From Planning to Production",
    date: "25 August 2026",
  },
  {
    linkHref: "/blog-details",
    mediaSrc: "/images/other/blog2.jpg",
    title: "Building a Strong Safety Culture in Mining Operations",
    date: "25 August 2026",
  },
  {
    linkHref: "/blog-details",
    mediaSrc: "/images/other/blog3.jpg",
    title: "How Mining Companies Can Reduce Environmental Impact",
    date: "25 August 2026",
  },
];

export default function BlogItems() {
  return (
    <div className="blogs_list_sec sec-pad-all">
      <div className="container">
        <div className="main_wrapper">
          {blogsData.map((item, index) => (
            <BlogCol data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
