import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Public_Sans } from "next/font/google";
import MainTemplate from "@/components/frontendcomponent/templates/MainTemplate";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--publicsans",
});

const ppTelegraf = localFont({
  src: "../../public/font/PPTelegraf-Bold.woff",
  weight: "700",
  style: "normal",
  variable: "--pptelegraf",
});

export const metadata: Metadata = {
  title: "SJ Group",
  description: "SJ Group website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.variable} ${ppTelegraf.variable}`}
        cz-shortcut-listen="true"
      >
        <MainTemplate>{children}</MainTemplate>
      </body>
    </html>
  );
}
