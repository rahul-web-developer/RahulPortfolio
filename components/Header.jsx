"use client";
import { useState } from "react";
import Link from "next/link";

const Header = ({ download }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full border-black sticky top-0 z-50 bg-[#ECF0F3]">
      <div className="w-11/12 sm:w-10/12 h-[80px] md:h-[100px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <div>
            <Link href={"#myabout"}>
              <img
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-center border-2 border-gray-700"
                src="dev/pass.jpg"
                alt="Profile Picture"
              />
            </Link>
          </div>
          <h1 className="text-lg sm:text-xl font-semibold">Rahul</h1>
        </div>

        {/* Navigation for larger screens */}
        <ul className="hidden sm:flex font-semibold text-gray-600 items-center gap-4 md:gap-8">
          <Link href={"#myportfolio"} className="hover:text-[#F6AB94] uppercase">
            Portfolio
          </Link>

          <Link href={"#myResume"} className="hover:text-[#F6AB94] uppercase">
            My Resume
          </Link>

          <Link href={"#whatido"} className="hover:text-[#F6AB94] uppercase">
            What I Do
          </Link>

          <Link href={"#contactus"} className="hover:text-[#F6AB94] uppercase">
            Contact Us
          </Link>

          <button
            className="hover:text-[#F6AB94] uppercase cursor-pointer border-2 border-rose-500 p-2 rounded-lg bg-gradient-to-r from-purple-600 via-pink-700 to-red-700 bg-clip-text text-transparent"
            onClick={download}
          >
            Download Cv
          </button>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <button
            className="text-gray-700 font-semibold"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gray-100 p-4">
          <ul className="flex flex-col gap-4 text-gray-600 font-semibold">
            <Link href={"#myportfolio"} className="hover:text-[#F6AB94] uppercase" onClick={toggleMenu}>
              Portfolio
            </Link>

            <Link href={"#myResume"} className="hover:text-[#F6AB94] uppercase" onClick={toggleMenu}>
              My Resume
            </Link>

            <Link href={"#whatido"} className="hover:text-[#F6AB94] uppercase" onClick={toggleMenu}>
              What I Do
            </Link>

            <Link href={"#contactus"} className="hover:text-[#F6AB94] uppercase" onClick={toggleMenu}>
              Contact Us
            </Link>

            <button
              className="hover:text-[#F6AB94] uppercase cursor-pointer border-2 border-rose-500 p-2 rounded-lg bg-gradient-to-r from-purple-600 via-pink-700 to-red-700 bg-clip-text text-transparent"
              onClick={() => {
                download();
                toggleMenu();
              }}
            >
              Download Cv
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
