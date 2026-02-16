import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QuickFix Local | Trusted Local Home Services",
  description:
    "QuickFix Local connects you with trusted local professionals for fast and reliable home services near you.",
  keywords: [
    "QuickFix Local",
    "local services",
    "plumbing",
    "electrician",
    "home repair",
    "near me services",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
