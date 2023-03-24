import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NavLink({ href, children, className }) {
  const router = useRouter();
  const [activeClassNames, setActiveClassNames] = useState("");

  useEffect(() => {
    if (router.pathname === href) {
      setActiveClassNames("text-primary");
    } else {
      setActiveClassNames("");
    }
  }, [router.pathname]);

  return (
    <Link className={`${className} ${activeClassNames}`} href={href}>
      {children}
    </Link>
  );
}
