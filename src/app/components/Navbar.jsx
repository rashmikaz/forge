import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" text-gray px-40 py-9">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-1xl font-bold  text-gray-400">FORGE.</h1>

        <ul className="flex space-x-15 font-medium text-gray-400">
          <li>
            <Link href="" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-gray-400">
              Solutions
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-gray-400">
              Tech Partners
            </Link>
          </li>
        </ul>

        <Link href="" className="hover:text-gray-400 font-medium text-gray-400">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
