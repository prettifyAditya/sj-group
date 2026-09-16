import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  classname?: string;
  linkHref?: string;
  buttonText?: string;
  svgpath?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  [key: string]: unknown;
}

export default function Button({
  classname = "",
  linkHref = "",
  buttonText = "",
  svgpath = null,
  onClick,
  ...rest
}: ButtonProps) {
  const className = `btn ${classname}`;

  if (linkHref) {
    return (
      <Link href={linkHref} className={className} {...rest}>
        {buttonText}
        {svgpath}
      </Link>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick} {...rest}>
      {buttonText}
      {svgpath}
    </button>
  );
}