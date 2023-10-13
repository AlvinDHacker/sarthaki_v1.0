import React from "react";

const VerticalNav = () => {
  return (
    <div>
      <div className="rounded-md border-b-gray-600 p-3 h-[90%] md:m-3 m-1 bg-gray-300">
        <h1 className="font-bold text-xl">Quick Links</h1>
        <ul className="my-4 space-y-3">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Accounting</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VerticalNav;
