import Image from "next/image";
import Link from "next/link";
import React from "react";
import SideMenu from "../SideMenu/SideMenu";

const activeClass =
  "before:h-[1px] before:box-content-[''] before:w-1/2 before:absolute before:bg-primary before:bottom-2 text-gray-300 text-light";

const Header = () => {
  return (
    <header className="w-full h-24 px-4 bg-dark sticky left-0 top-0 nav flex align-items-cetner z-10">
      <nav className="flex items-center w-full">
        <div className="logo flex items-center">
          <Link href="/">
            <Image
              priority
              className="object-contain"
              src="/logo.png"
              alt="logo"
              width={300}
              height={80}
            />
          </Link>
        </div>
        <ul className="flex ml-auto max-lg:hidden">
          <li>
            <Link
              className={`relative uppercase text-md p-4 hover:text-opacity-50 transition duration-300 text-gray-300 ${activeClass}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`relative uppercase text-md p-4 hover:text-opacity-50 transition duration-300 text-gray-300`}
              href="/about"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className={`relative uppercase text-md p-4 hover:text-opacity-50 transition duration-300 text-gray-300`}
              href="/blogs"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              className={`relative uppercase text-md p-4 hover:text-opacity-50 transition duration-300 text-gray-300`}
              href="/contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="max-lg:ml-auto">
          <Link
            href="/login"
            className="text-primary text-md uppercase p-4 hover:text-opacity-50 transition duration-300 ease-in-out"
          >
            Login / Register
          </Link>
          <SideMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
