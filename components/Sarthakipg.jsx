"use client";
import React, { useState } from "react";
import SarthakiDash from "./SarthakiDash";

const Sarthakipg = () => {
  const [comp1, setComp1] = useState(false);

  const changeComp1 = () => {
    setComp1(!comp1);
    setComp2(false);
    setComp3(false);
  };

  const [comp2, setComp2] = useState(false);

  const changeComp2 = () => {
    setComp2(!comp2);
    setComp1(false);
    setComp3(false);
  };

  const [comp3, setComp3] = useState(false);

  const changeComp3 = () => {
    setComp3(!comp3);
    setComp2(false);
    setComp1(false);
  };

  return (
    <div>
      <div className="my-3 flex flex-row gap-3">
        <div>
          <button
            onClick={changeComp1}
            type="button"
            className="relative text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Company 1
          </button>

          {comp1 ? (
            <ul className="absolute px-8 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  2019-2020
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  2020-2021
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  2021-2022
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  2022-2023
                </li>
            </ul>
          ) : (
            ""
          )}
        </div>
        <div>
          <button
            type="button"
            onClick={changeComp2}
            className="relative text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Company 2
          </button>
          {comp2 ? (
            <ul className="absolute px-8 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  2019-2020
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                  2020-2021
                </li>
                <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                  2021-2022
                </li>
                <li className="w-full px-4 py-2 rounded-b-lg">2022-2023</li>
            </ul>
          ) : (
            ""
          )}
        </div>
        <div>
          <button
            type="button"
            onClick={changeComp3}
            className="relative text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Company 3
          </button>
          {comp3 ? (
            <ul className="absolute px-8 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                2019-2020
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                2020-2021
              </li>
              <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                2021-2022
              </li>
              <li className="w-full px-4 py-2 rounded-b-lg">2022-2023</li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <SarthakiDash/>
    </div>
  );
};

export default Sarthakipg;
