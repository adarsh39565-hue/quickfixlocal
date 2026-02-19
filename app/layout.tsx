import "./globals.css";

export const metadata = {
  title: "Quick Fix Local",
  description: "Trusted local services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <div className="text-lg font-semibold">Quick Fix Local</div>

            <div className="hidden gap-2 md:flex">
              <a className="rounded-md px-3 py-2 text-sm hover:bg-gray-100" href="#">
                Select City
              </a>
              <a className="rounded-md px-3 py-2 text-sm hover:bg-gray-100" href="#">
                Become a Partner
              </a>
              <a className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800" href="#">
                Login
              </a>
            </div>

            <div className="md:hidden">
              <button className="rounded-md border px-3 py-2 text-sm">Menu</button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4">{children}</main>

        <footer className="mt-16 border-t bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600">
            © {new Date().getFullYear()} Quick Fix Local • Privacy • Terms • Support
          </div>
        </footer>
      </body>
    </html>
  );
}
