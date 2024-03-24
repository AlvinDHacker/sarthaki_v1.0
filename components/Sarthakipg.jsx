"use client";
import React, { useState, useEffect } from "react";
import { setDoc, doc, addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import SarthakiDash from "./SarthakiDash";

const Sarthakipg = () => {
  const colRef = collection(db, "company");
  const [arr, setArr] = useState([]);

  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        let company = [];
        console.log(sessionStorage.getItem("userEmail"));
        console.log(company.user[1])
        snapshot.docs.forEach((doc) => {
          company.push({ ...doc.data(), id: doc.id });
        });
        setArr(company);
        console.log(company);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
