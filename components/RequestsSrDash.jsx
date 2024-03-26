"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { setDoc, doc } from "firebase/firestore";
import { db } from "../lib/firebase";

const RequestsSrDash = (props) => {
  const [type, setType] = useState("");
  const [month, setMonth] = useState(null);
  const [dateAs, setDateAs] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [dateFrom, setDateFrom] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
        const docId = uuidv4();
      const docRef = doc(db, "company", props.companyId , "requests", docId);
      await setDoc(docRef, {
        type: type,
        month: month,
        dateAs: dateAs,
        dateFrom: dateFrom,
        dateTo: dateTo,
      });
      alert("Request Sent successfully");
    } catch (e) {
      alert("Request Sending Error");
      console.log(e);
    }
    e.target.reset();
    console.log("Request")
  };

  return (
    <div>
      <h1 className="font-bold text-xl py-1">Request for any Document</h1>
      {console.log(month)}
      {console.log(type)}
      <form onSubmit={submitForm}>
        <label
          for="type"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select the Type
        </label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
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
          value={month}
          onChange={(e) => setMonth(e.target.value)}
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
          value={dateAs} // <-- bind the value to the state variable
          onChange={(e) => setDateAs(e.target.value)} // <-- update the state on change
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
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
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
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default RequestsSrDash;
