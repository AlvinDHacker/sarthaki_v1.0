"use client";
import {
  Banknote,
  BookMarked,
  Calculator,
  CandlestickChart,
  ChevronDown,
  ChevronRight,
  Landmark,
  Search,
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
    <div className="flex flex-col">
      <form onSubmit={() => {}} autoComplete='off' className='mt-4 flex mb-2 relative'>
        <input onChange={() => {}} id='contentSearch' className='w-full selection:bg-blue-500 py-2 pl-3 outline-none border-none text-white caret-white bg-blue-600 placeholder:text-white rounded-[10px]' type='text' placeholder='Search' data-search />
        <button type="submit" className="absolute top-0 right-0"><Search className='text-white w-6 h-6 mt-2 pr-2' /></button>
      </form>
      <ul className="my-4 space-y-1">
        <li>
          <a
            onClick={AccChange}
            className="flex items-center p-1 text-sm font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
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
                className="flex items-center ml-10 p-1 text-sm font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
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
                className="flex items-center ml-10 p-1 text-sm font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
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
                className="flex items-center ml-10 p-1 text-sm font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
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
            className="flex items-center p-1 text-sm font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
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
                className="flex items-center ml-10 p-1 text-sm font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
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
                className="flex items-center ml-10 p-1 text-sm font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
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
                className="flex items-center ml-10 p-1 text-sm font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
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
    </div>
  );
};

export default VerticalNav;
