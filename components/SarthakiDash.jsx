"use client";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import React, { useLayoutEffect, useState } from "react";

const SarthakiDash = () => {
  const [togglemain, setTogglemain] = useState(1);

  const togglehead = (index) => {
    setTogglemain(index);
  };

  const [mis, setMis] = useState(1);

  const togglemis = (index) => {
    setMis(index);
  };

  const [wbox, setWbox] = useState(0);

  const togglewbox = (index) => {
    setWbox(index);
  };

  const [userAuth, setUserAuth] = useState(null);
  useLayoutEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserAuth(user);
      } else {
        setUserAuth(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <div>
      <h1 className="pt-1">Company 1</h1>

      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className={
                togglemain === 1
                  ? "inline-block p-4 border-b-2 rounded-t-lg border-blue-300"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
              type="button"
              onClick={() => {
                togglehead(1);
                setWbox(0);
                setMis(1);
              }}
            >
              MIS
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={
                togglemain === 2
                  ? "inline-block p-4 border-b-2 rounded-t-lg border-blue-300"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
              type="button"
              onClick={() => {
                togglehead(2);
                setMis(0);
                setWbox(1);
              }}
            >
              Workbox
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={
                togglemain === 3
                  ? "inline-block p-4 border-b-2 rounded-t-lg border-blue-300"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
              type="button"
              onClick={() => {
                togglehead(3);
                setMis(0);
                setWbox(0);
              }}
            >
              Requests
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={
                togglemain === 4
                  ? "inline-block p-4 border-b-2 rounded-t-lg border-blue-300"
                  : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }
              type="button"
              onClick={() => {
                togglehead(4);
                setMis(0);
                setWbox(0);
              }}
            >
              Chat
            </button>
          </li>
        </ul>
      </div>

      <div className={togglemain === 1 ? "block" : "hidden"}>
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                className={
                  mis === 1
                    ? "inline-block p-4 border-b-2 rounded-t-lg border-blue-300"
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }
                type="button"
                onClick={() => togglemis(1)}
              >
                Standard
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className={
                  mis === 2
                    ? "inline-block p-4 border-b-2 rounded-t-lg border-blue-300"
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }
                type="button"
                onClick={() => togglemis(2)}
              >
                Custom
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className={mis === 1 ? "block" : "hidden"}>
        <div className="grid md:grid-cols-4 gap-3">
          <div>
            <Image
              src="/img/video.png"
              width={400}
              height={100}
              className="rounded-md"
              alt=""
            />
          </div>
          <div>
            <Image
              src="/img/video.png"
              width={400}
              height={100}
              className="rounded-md"
              alt=""
            />
          </div>
          <div>
            <Image
              src="/img/video.png"
              width={400}
              height={100}
              className="rounded-md"
              alt=""
            />
          </div>
          <div>
            <Image
              src="/img/video.png"
              width={400}
              height={100}
              className="rounded-md"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className={mis === 2 ? "block" : "hidden"}>
        <form>
          <label
            for="type"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select the Type
          </label>
          <select
            id="type"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Top 10</option>
            <option>Bottom 10</option>
            <option>Ascending</option>
            <option>Descending</option>
          </select>

          <label
            for="month"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Month
          </label>
          <select
            id="month"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Jan 2023</option>
            <option>Feb 2023</option>
            <option>March 2023</option>
            <option>April 2023</option>
          </select>

          <label
            for="dateasat"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Date As at
          </label>
          <input
            id="dateasat"
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <div className="my-3">
            <label
              for="datefrom"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date From
            </label>
            <input
              id="datefrom"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label
              for="dateto"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date to
            </label>
            <input
              id="dateto"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Generate
          </button>
        </form>
      </div>

      <div className={togglemain === 2 ? "block" : "hidden"}>
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                className={
                  wbox === 1
                    ? "inline-block p-4 border-b-2 rounded-t-lg border-blue-300"
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }
                type="button"
                onClick={() => togglewbox(1)}
              >
                Pending
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className={
                  wbox === 2
                    ? "inline-block p-4 border-b-2 rounded-t-lg border-blue-300"
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }
                type="button"
                onClick={() => togglewbox(2)}
              >
                Upload
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className={
                  wbox === 3
                    ? "inline-block p-4 border-b-2 rounded-t-lg border-blue-300"
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }
                type="button"
                onClick={() => togglewbox(3)}
              >
                Status
              </button>
            </li>
            {
              (userAuth?.email == 'admin@sarthaki.com') ? <li className="mr-2" role="presentation">
              <button
                className={
                  wbox === 3
                    ? "inline-block p-4 border-b-2 rounded-t-lg border-blue-300"
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }
                type="button"
                onClick={() => togglewbox(4)}
              >
                Add Tasks
              </button>
            </li> : ''
            }
            
          </ul>
        </div>
      </div>

      {/* Create Wbox 1, 2, 3 & 4 */}
      <div className={wbox === 1 ? "block" : "hidden"}>
        <h1 className="font-bold text-xl py-1">
          You have the following tasks Pending
        </h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-md">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Sr. No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Pending Tasks
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Month
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  1
                </th>
                <td className="px-6 py-4">Purchase Bill</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  May 2023
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  2
                </th>
                <td className="px-6 py-4">Sale Bill</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  May 2023
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  3
                </th>
                <td className="px-6 py-4">Bank Statement</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  May 2023
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  4
                </th>
                <td className="px-6 py-4">Voucher</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  May 2023
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={wbox === 2 ? "block" : "hidden"}>
        <h1 className="font-bold text-xl py-1">
          Kindly Upload Pending Documents
        </h1>
        <form>
          <label
            for="type"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select the Type
          </label>
          <select
            id="type"
            className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Purchase Bill </option>
            <option>Sale Bill </option>
            <option>Bank Statement</option>
            <option>Voucher</option>
          </select>

          <label
            for="month"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Month
          </label>
          <select
            id="month"
            className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Jan 2023</option>
            <option>Feb 2023</option>
            <option>March 2023</option>
            <option>April 2023</option>
          </select>

          <label
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            for="file_input"
          >
            Upload file
          </label>
          <input
            className="block mb-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
          />

          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Upload
          </button>
        </form>
      </div>

      <div className={wbox === 3 ? "block" : "hidden"}>
        <h1 className="font-bold text-xl py-1">
          Sarthaki has the following tasks Pending
        </h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-md">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Sr. No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Pending Tasks
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Month
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  1
                </th>
                <td className="px-6 py-4">Purchase Bill Entry</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  April 2023
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  2
                </th>
                <td className="px-6 py-4">Sale Bill Entry</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  April 2023
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  3
                </th>
                <td className="px-6 py-4">Bank Statement Entry</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  April 2023
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  4
                </th>
                <td className="px-6 py-4">Voucher Entry</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  April 2023
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={wbox === 4 ? "block" : "hidden"}>
        <h1 className="font-bold text-xl py-1">
          Add Tasks for Sarthaki and the Client to Do
        </h1>
        <form>
          <label
            for="type"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Task for :
          </label>
          <select
            id="type"
            className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Sarthaki</option>
            <option>Client</option>
          </select>

          <label
            for="task-name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Task Name
          </label>
          <input
            id="task-name"
            className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <label
            for="month"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Month
          </label>
          <select
            id="month"
            className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Jan 2023</option>
            <option>Feb 2023</option>
            <option>March 2023</option>
            <option>April 2023</option>
          </select>

          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit Request
          </button>
        </form>
      </div>

      <div className={togglemain === 3 ? "block" : "hidden"}>
        <h1 className="font-bold text-xl py-1">
          Pls provide following document
        </h1>
        <form>
          <label
            for="type"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select the Type
          </label>
          <select
            id="type"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Certified Audited Financial</option>
            <option>Profit & Loss Statement</option>
            <option>Product wise Dashboard</option>
            <option>Something else here</option>
          </select>

          <label
            for="month"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Month
          </label>
          <select
            id="month"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Jan 2023</option>
            <option>Feb 2023</option>
            <option>March 2023</option>
            <option>April 2023</option>
          </select>

          <label
            for="dateasat"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Date As at
          </label>
          <input
            id="dateasat"
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <div className="my-3">
            <label
              for="datefrom"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date From
            </label>
            <input
              id="datefrom"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label
              for="dateto"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date to
            </label>
            <input
              id="dateto"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit Request
          </button>
        </form>
      </div>

      <div className={togglemain === 4 ? "block" : "hidden"}>
        {/* Add Chat content */}
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Profile
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Settings
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Messages
          </button>
        </div>
      </div>
    </div>
  );
};

export default SarthakiDash;
