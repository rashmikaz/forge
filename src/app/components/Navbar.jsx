"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
  { id: "services", label: "Solutions", href: "/solutions" },
  { id: "portfolio", label: "Portffolio", href: "/tech-partners" },
  { id: "contact", label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = window.scrollY / window.innerHeight;
      setIsFixed(scrollPercentage < 0.99);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 bg-white/30 backdrop-blur-md transition-transform duration-700 ease-out ${
        isFixed
          ? "fixed top-0 left-0 translate-y-0"
          : "absolute top-0 left-0 -translate-y-24"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-12 py-4">
        <h1 className="text-lg font-bold text-gray-400 tracking-widest">
          FORGE
        </h1>

        <nav className="flex gap-12 relative items-center">
          {sections.map(({ label, href }) => (
            <div key={href} className="relative group flex items-center gap-4">
              {pathname === href && (
                <span className="w-2 h-2 rounded-full bg-black transition-all duration-300"></span>
              )}

              <Link
                href={href}
                className={`transition-transform duration-300 hover:scale-110 hover:text-black ${
                  pathname === href
                    ? "text-black font-semibold text-lg"
                    : "text-gray-500 font-medium text-lg"
                }`}
              >
                {label}
              </Link>

              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-black rounded-full transition-all duration-300 ${
                  pathname === href ? "w-full" : "w-0"
                }`}
              ></span>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
