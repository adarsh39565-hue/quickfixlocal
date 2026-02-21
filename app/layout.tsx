import "./globals.css";

export const metadata = {
  title: "QuickFix Local",
  description: "Noida’s trusted home service network (Plumbing • Electrician • AC Repair)",
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
