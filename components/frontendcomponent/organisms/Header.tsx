"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "@/uploads/sass/header/header.css";
import Button from "../atoms/Button";

interface DropdownItem {
  icon: string;
  title: string;
  description: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const servicesDropdown: DropdownItem[] = [
  {
    icon: "/icon/crane.svg",
    title: "Drilling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis.",
  },
  {
    icon: "/icon/crane.svg",
    title: "Mining",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis.",
  },
  {
    icon: "/icon/crane.svg",
    title: "Excavation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis.",
  },
  {
    icon: "/icon/crane.svg",
    title: "Transportation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis.",
  },
  {
    icon: "/icon/crane.svg",
    title: "Blasting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis.",
  },
  {
    icon: "/icon/crane.svg",
    title: "Dumping",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis.",
  },
];

const navItems: NavItem[] = [
  { label: "About Us", href: "javascript:;" },
  { label: "Services", href: "javascript:;", dropdown: servicesDropdown },
  { label: "Projects", href: "javascript:;" },
  { label: "Sustainability", href: "javascript:;" },
  { label: "Careers", href: "javascript:;" },
  { label: "Blogs", href: "javascript:;" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [logoChange, setLogoChange] = useState<boolean>(false);
  const pathname = usePathname();
  const blogDetails = pathname.startsWith("/blog-details");
  const headerFixed = blogDetails;
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 100);
      setLogoChange(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${isScrolled ? "header-fixed" : ""} ${headerFixed ? "header-fit" : ""}`}
    >
      <div className="container">
        <div className="header-container">
          <div className="colA">
            <Link href="/" className="logo">
              {logoChange || headerFixed ? (
                <Image
                  width={69}
                  height={80}
                  src="/images/logo-dark.svg"
                  alt="Logo Image"
                  className="logo-dark"
                />
              ) : (
                <Image
                  width={69}
                  height={80}
                  src="/images/logo.svg"
                  alt="Logo Image"
                  className="logo-light"
                />
              )}
            </Link>
          </div>

          <div className="colB">
            <ul className="nav-items">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={item.dropdown ? "hasDropdown" : undefined}
                >
                  <Link href={item.href}>
                    {item.label}
                    {item.dropdown && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="m6 9l6 6l6-6"
                        />
                      </svg>
                    )}
                  </Link>

                  {item.dropdown && (
                    <div className="dropdown-menu">
                      <ul>
                        {item.dropdown.map((service) => (
                          <li key={service.title}>
                            <Link href="javascript:;">
                              <div className="icon">
                                <img src={service.icon} alt="" />
                              </div>
                              <div className="desc">
                                <h6>{service.title}</h6>
                                <p>{service.description}</p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="colC">
            <Button
              linkHref="/"
              buttonText="Contact Us"
              svgpath={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 25 25"
                >
                  <path
                    fill="currentColor"
                    d="M18.92 6.05a.75.75 0 0 0-.598-.297L9.327 5.75a.75.75 0 1 0 0 1.5l7.19.002l-10.72 10.72a.75.75 0 0 0 1.061 1.06L17.573 8.318l.002 7.177a.75.75 0 0 0 1.5-.001l-.003-8.933a.75.75 0 0 0-.152-.51"
                  />
                </svg>
              }
              classname="solid-secondary"
            />
            {/* <Link href="/" className="btn solid-secondary">
              Contact Us
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
}
