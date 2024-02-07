"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { VscMenu } from "react-icons/vsc";

const SideMenu = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("-translate-x-full");
    }
  };

  const activeClass =
  "before:h-[1px] before:box-content-[''] before:w-1/2 before:absolute before:bg-primary before:bottom-2 text-gray-300 text-light";

  return (
    <div className="__sidemenu w-max float-right hidden max-lg:block">
      <button onClick={handleMenu} className="text-light text-2xl">
        <VscMenu />
        <div
          ref={menuRef}
          className="fixed left-0 top-[96px] h-full w-full max-w-[310px] z-50 bg-dark duration-300 -translate-x-full"
        >
          <ul className="px-6 text-left">
            <li className="mb-1">
              <Link
                className={`text-light hover:text-primary duration-300 text-lg`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className={`text-light hover:text-primary duration-300 text-lg`}
                href="/about"
              >
                About Us
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className={`text-light hover:text-primary duration-300 text-lg`}
                href="/blogs"
              >
                Blogs
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className={`text-light hover:text-primary duration-300 text-lg`}
                href="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </button>
    </div>
  );
};

export default SideMenu;
