import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="mx-20 py-3 flex justify-end items-center border-b-neutral-200">
      <div className="mr-auto">
        <Link href="/">
          <Image src="/logo.png" width={50} height={50} alt="Logo" />
        </Link>
      </div>
      <NavLink className="ml-3 text-lg" href="/">
        Home
      </NavLink>
      <NavLink className="ml-3 text-lg" href="/about">
        About
      </NavLink>
      <NavLink className="ml-3 text-lg" href="/people">
        People
      </NavLink>
    </nav>
  );
}
