import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-gray-100 w-[98%] fixed bottom-1 rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-2">
          <div className="sm:flex sm:items-center sm:justify-between my-1">
            <a href="#" className="flex items-center sm:mb-0">
              <Image
                src="/img/download.png"
                className="mr-3"
                alt="Sarthaki Logo"
                height={20}
                width={20}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Sarthaki
              </span>
            </a>
            <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="border-gray-200 sm:mx-auto dark:border-gray-700" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 my-1">
            © 2023{" "}
            <a href="#" className="hover:underline">
              Sarthaki
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
