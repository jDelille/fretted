import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "../scss/globals.scss";

const PoppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Fretted",
  description: "Interactive guitar learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PoppinsFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
