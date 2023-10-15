"use client";
import {
  Banknote,
  BookMarked,
  Calculator,
  CandlestickChart,
  ChevronDown,
  ChevronRight,
  Landmark,
} from "lucide-react";
import React, { useState } from "react";

const VerticalNav = (props) => {
  const [acc, setAcc] = useState(false);
  const [comp, setComp] = useState(false);

  const AccChange = () => {
    setAcc(!acc);
  };
  const CompChange = () => {
    setComp(!comp);
  };

  return (
    <ul className="my-4 space-y-3">
      <li>
        <a
          onClick={AccChange}
          className="flex items-center p-2 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          {acc ? <ChevronDown /> : <ChevronRight />}
          <span className="ml-3">Accounting</span>
        </a>
      </li>

      {acc ? (
        <>
          <li>
            <a
              onClick={() => {
                props.changeStat(2);
                props.nav ? props.handleNav() : "";
              }}
              className="flex items-center ml-10 p-2 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <Calculator />
              <span className="ml-3">Foundational Accounting</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                props.changeStat(3);
                props.nav ? props.handleNav() : "";
              }}
              className="flex items-center ml-10 p-2 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <Landmark />
              <span className="ml-3">Accounting Concepts</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                props.changeStat(4);
                props.nav ? props.handleNav() : "";
              }}
              className="flex items-center ml-10 p-2 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <CandlestickChart />
              <span className="ml-3">Accounting Conventions</span>
            </a>
          </li>
        </>
      ) : (
        ""
      )}

      <li>
        <a
          onClick={CompChange}
          className="flex items-center p-2 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          {comp ? <ChevronDown /> : <ChevronRight />}
          <span className="flex-1 ml-3 whitespace-nowrap">Complaince</span>
        </a>
      </li>

      {comp ? (
        <>
          <li>
            <a
              onClick={() => {
                props.changeStat(5);
                props.nav ? props.handleNav() : "";
              }}
              className="flex items-center ml-10 p-2 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <Calculator />
              <span className="ml-3">NPO</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                props.changeStat(6);
                props.nav ? props.handleNav() : "";
              }}
              className="flex items-center ml-10 p-2 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <Banknote />
              <span className="ml-3">Tax</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                props.changeStat(7);
                props.nav ? props.handleNav() : "";
              }}
              className="flex items-center ml-10 p-2 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <BookMarked />
              <span className="ml-3">Laws</span>
            </a>
          </li>
        </>
      ) : (
        ""
      )}
    </ul>
  );
};

export default VerticalNav;
