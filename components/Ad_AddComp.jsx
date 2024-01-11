"use client";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { setDoc, doc, addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

const Ad_AddComp = () => {
  const [company, setCompany] = useState({name:'', user: []});

  const [arr, setArr] = useState([]);
  const [selEmail, setSelEmail] = useState([]);
  const [userAuth, setUserAuth] = useState(null);

  async function fetchData() {
    if (company) {
        console.log(company)
      const userRef = doc(db, "company", company.uid);
      setDoc(
        userRef,
        // { name: company.name, users: company.arr },
        company,
        // { merge: true }
      );
    }
  }

  const colRef = collection(db, "users");

  useEffect(() => {
    getDocs(colRef)
      .then((snapshot) => {
        let user = [];
        snapshot.docs.forEach((doc) => {
          user.push({ ...doc.data(), id: doc.id });
        });
        //   <option>{user.email}</option>
        // arr.push(user[1])
        //   console.log(user);
        const newArr = [];
        user.forEach((item, index) => newArr.push(item.email));
        setArr(newArr);
      })
      .catch((err) => {
        console.log(err.message);
      });
  })

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
  });

  const addComp = (e) => {
    e.preventDefault();
    fetchData();
    e.target.reset();
  };

  return (
    <div className="md:w-[60%] w-[90%] mx-auto py-5">
      <h1 className="font-bold text-xl mb-5 ">Create Company</h1>
      <form onSubmit={addComp}>
        <div className="mb-4">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Company Name
          </label>
          <input
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={company.name}
            onChange={(e) => setCompany(prevState => ({...prevState,['name'] : e.target.value}))}
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Add Access Users
          </label>

          {/* {getDocs(colRef)} */}
          {
            // console.log(arr)
            arr.map((item, index) => {
              return (
                // <option key={index}>{item}</option>
                <div key={index} className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    onChange={() => setSelEmail(prevSelEmail => [...prevSelEmail, item])}
                    // onClick={setSelEmail.push(item)}
                    value={item}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {item}
                  </label>
                </div>
              );
            })
          }

          {/* <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            For Verification enter Admin Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setAdminpass(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          /> */}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Company
        </button>
      </form>
    </div>
  );
};

export default Ad_AddComp;
