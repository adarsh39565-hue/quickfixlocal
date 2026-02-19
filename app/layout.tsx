import "./globals.css";
import Link from "next/link";

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
            <Link href="/" className="text-lg font-semibold">
              Quick Fix Local
            </Link>

            <nav className="hidden items-center gap-2 md:flex">
              <details className="relative">
                <summary className="cursor-pointer list-none rounded-md px-3 py-2 text-sm hover:bg-gray-100">
                  Select City ▾
                </summary>
                <div className="absolute right-0 mt-2 w-44 rounded-md border bg-white p-2 shadow">
                  {["Delhi", "Noida", "Gurgaon", "Ghaziabad"].map((city) => (
                    <Link
                      key={city}
                      href={`/book?city=${encodeURIComponent(city)}`}
                      className="block rounded px-2 py-2 text-sm hover:bg-gray-100"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </details>

              <Link
                className="rounded-md px-3 py-2 text-sm hover:bg-gray-100"
                href="/partner"
              >
                Become a Partner
              </Link>

              <Link
                className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
                href="/login"
              >
                Login
              </Link>
            </nav>

            <div className="md:hidden">
              <Link className="rounded-md border px-3 py-2 text-sm" href="/get-started">
                Menu
              </Link>
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
