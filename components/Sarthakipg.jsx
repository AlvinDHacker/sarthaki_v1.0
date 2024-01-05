"use client";
import React, { useState } from "react";
import SarthakiDash from "./SarthakiDash";

const Sarthakipg = () => {

  return (
    <div>
      <div className="my-3 flex flex-row gap-3">
        <div>
          <button
            type="button"
            className="relative text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Company 1
          </button>
        </div>
        <div>
          <button
            type="button"
            className="relative text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Company 2
          </button>
        </div>
        <div>
          <button
            type="button"
            className="relative text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Company 3
          </button>
        </div>
      </div>
      <SarthakiDash/>
    </div>
  );
};

export default Sarthakipg;
