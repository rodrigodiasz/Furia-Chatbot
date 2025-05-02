import Link from "next/link";
import { ThemeSwitch } from "./ui/switch";

export function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="/" className="text-xl font-bold">
        Logo
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
