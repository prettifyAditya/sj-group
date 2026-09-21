"use client";
import Link from "next/link";
import { useState } from "react";
import type { SyntheticEvent, SubmitEvent } from "react";
import Input from "../../atoms/Input";
import Textarea from "../../atoms/Textarea";
import Button from "../../atoms/Button";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  message: string;
}

export default function ContactDetails() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
  });
  const handleChange = (
    e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="contact_details">
      <div className="main_wrapper flex">
        <div className="colA">
          <div className="contact_details_wrapper">
            <div className="heading">
              <h1>Contact Us</h1>
            </div>
            <ul>
              <li>
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"
                    />
                    <path
                      fill="currentColor"
                      d="m16 30l-8.436-9.949a35 35 0 0 1-.348-.451A10.9 10.9 0 0 1 5 13a11 11 0 0 1 22 0a10.9 10.9 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.9 8.9 0 0 0 25 13a9 9 0 1 0-18 0a8.9 8.9 0 0 0 1.813 5.395"
                    />
                  </svg>
                </div>
                <div className="info">
                  <h6>Address</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Hendrerit et
                    malesuada a purus sit. Vestibulum condimentum.
                  </p>
                  <Link href="/" className="direction">
                    Get Direction{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M13.483 4.47a.75.75 0 0 1 1.06 0l6.988 7a.75.75 0 0 1 0 1.06l-6.988 7a.75.75 0 0 1-1.061-1.06l5.709-5.719L3 12.762a.75.75 0 0 1-.002-1.5l16.194-.01l-5.711-5.722a.75.75 0 0 1 0-1.06"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </li>
              <li>
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="currentColor"
                      d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32m-40 110.8V792H136V270.8l-27.6-21.5l39.3-50.5l42.8 33.3h643.1l42.8-33.3l39.3 50.5zM833.6 232L512 482L190.4 232l-42.8-33.3l-39.3 50.5l27.6 21.5l341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5l-39.3-50.5z"
                    />
                  </svg>
                </div>
                <div className="info">
                  <h6>Email</h6>
                  <Link href="mailto:info@sjgroup.com">info@sjgroup.com</Link>
                </div>
              </li>
              <li>
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="m6.987 2.066l-.717.216a3.5 3.5 0 0 0-2.454 2.854c-.297 2.068.367 4.486 1.968 7.259c1.597 2.766 3.355 4.548 5.29 5.328a3.5 3.5 0 0 0 3.715-.705l.542-.514a2 2 0 0 0 .247-2.623l-1.356-1.88a1.5 1.5 0 0 0-1.655-.556l-2.051.627l-.053.01c-.226.033-.748-.456-1.398-1.582c-.68-1.178-.82-1.867-.633-2.045l1.043-.973a2.5 2.5 0 0 0 .575-2.85l-.662-1.471a2 2 0 0 0-2.4-1.095m1.49 1.505l.66 1.471a1.5 1.5 0 0 1-.344 1.71l-1.046.974C7.078 8.36 7.3 9.442 8.2 11c.846 1.466 1.618 2.19 2.448 2.064l.124-.026l2.088-.637a.5.5 0 0 1 .552.185l1.356 1.88a1 1 0 0 1-.123 1.312l-.543.514a2.5 2.5 0 0 1-2.653.503c-1.698-.684-3.303-2.311-4.798-4.9C5.152 9.3 4.545 7.093 4.806 5.278a2.5 2.5 0 0 1 1.753-2.039l.717-.216a1 1 0 0 1 1.2.548"
                    />
                  </svg>
                </div>
                <div className="info">
                  <h6>Phone</h6>
                  <Link href="tel:1800-0000-000">Tel: 1800-0000-000</Link>
                  <Link href="tel:+91 000-000-0000">Mob: +91 000-000-0000</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="colB">
          <div className="heading">
            <h2>Let’s Build Solutions Together</h2>
          </div>
          <div className="form">
            <div className="form-grid">
              <Input
                type="text"
                label="Name *"
                name="Name"
                id="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                label="Email *"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                type="tel"
                label="Phone *"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                label="Company Name *"
                name="companyName"
                id="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
              <Textarea
                classname="full"
                label="Message *"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="submit-grp">
              <Button classname="solid-secondary" buttonText="Submit"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
