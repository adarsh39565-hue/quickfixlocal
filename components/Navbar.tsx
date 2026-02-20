import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          QuickFix Local
        </Link>

        <div className="flex items-center gap-6 text-sm text-gray-600">
          <Link className="hover:text-gray-900" href="/">
            Home
          </Link>
          <Link className="hover:text-gray-900" href="/book">
            Book
          </Link>

          <Link href="/book">
            <Button className="px-4 py-2 text-xs">Book Now</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
