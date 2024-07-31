import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 h-32 w-screen z-40">
      <div className="w-screen h-32 flex justify-around items-center">
        <div className="logo">
          <p className="text-white">wyndlabs</p>
        </div>
        <div className="links flex gap-4 text-white">
          <Link href="/" className="hover:text-gray-200">
            Grass
          </Link>
          <Link href="/" className="hover:text-gray-200">
            About
          </Link>
          <Link href="/" className="hover:text-gray-200">
            Careers
          </Link>
        </div>
        <div className="buttons flex gap-6 text-white">
          <button className="border border-white px-4 py-2 rounded-full bg-purple-700">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
