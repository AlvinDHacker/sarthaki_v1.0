"use client";
import { BookMarked, Calculator, MenuIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const NavHead = (props) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="#" className="flex items-center">
            <Image
              src="/img/download.png"
              className="mr-3"
              alt="Sarthaki Logo"
              width={30}
              height={30}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Sarthaki
            </span>
          </a>
          <div className="flex items-center">
            <a
              href="tel:9820257477"
              className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline"
            >
              Call Us
            </a>
            <a
              href="#"
              className="text-sm px-3 py-2 font-semibold rounded-md bg-blue-600 dark:bg-blue-500 hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex ">
            <div className="flex container justify-between font-medium mt-0 mr-6 text-sm">
              <div className="flex flex-row space-x-8">
                <div>
                  <a
                    onClick={() => props.changeStat(1)}
                    className="text-gray-900 dark:text-white hover:underline"
                    aria-current="page"
                  >
                    Home
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Sarthaki
                  </a>
                </div>
              </div>
              <div className="md:hidden">
                <button type="button" onClick={handleNav}>
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon />
                </button>
              </div>
            </div>
          </div>
        </div>

        {nav ? (
          <div
            className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-64 dark:bg-gray-800"
            style={{ zIndex: "5" }}
          >
            <div className="py-4 overflow-y-auto">
              <Image
                src=""
                className="h-8 mr-3"
                alt="Sarthaki Logo"
                width={10}
                height={10}
              />
              <ul className="space-y-2 font-medium">
                <li>
                  <a
                    href="#home"
                    className="flex items-center p-2 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    onClick={handleNav}
                  >
                    <Calculator />
                    <span className="ml-3">Accounting</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#resources"
                    className="flex items-center p-2 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                    onClick={handleNav}
                  >
                    <BookMarked />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Complaince
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};

export default NavHead;
