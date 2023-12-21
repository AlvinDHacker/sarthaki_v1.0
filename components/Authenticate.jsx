"use client";
import NavHead from "./NavHead";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";

const Authenticate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userAuth, setUserAuth] = useState(null);
  const [userName , setUserName] = useState('');

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserAuth(user);
        setUserName(user.email);
      } else {
        setUserAuth(null);
      }
    });
    return () => {
      listen();
    };
  });

  const LogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
      e.target.reset();
  };

  return (
    <div>
      <NavHead />
      <div className="md:w-[60%] w-[90%] mx-auto py-5">
        <h1 className="font-bold text-xl mb-5 ">Log-In to Sarthaki</h1>
        {userName}
        <form onSubmit={LogIn}>
          <div className="mb-4">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@sarthaki.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
        {userAuth ? (
          <>
            <div
              className="p-2 my-2 flex justify-between mb-4 text-sm text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400"
              role="alert"
            >
              <div className="m-2">
                <span className="font-medium">Sign In Success</span> Welcome to
                Sarthaki
              </div>
              <a
                href="/"
                type="submit"
                className="text-white bg-blue-700 md:my-0 my-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Go to Home
              </a>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Authenticate;
