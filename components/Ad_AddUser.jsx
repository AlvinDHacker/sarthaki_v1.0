"use client";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../lib/firebase";

const Ad_AddUser = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [adminpass, setAdminpass] = useState('');

    const [userAuth, setUserAuth] = useState(null);
    const [newUser, setNewUser] = useState(null);

    async function fetchData(user) {
      if (user) {
        const userRef = doc(db, 'users', user.uid)
        setDoc(
          userRef,
          { Name: user.displayName, email: user.email, role: 'client' },
          { merge: true }
        )
      }
    }

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
            setUserAuth(user);
            fetchData(user)
          } else {
            setUserAuth(null);
          }
        });
        return () => {
          listen();
        };
      });

      const handleCopy = () => {
        navigator.clipboard.writeText(newUser);
      }

  const signUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setNewUser(email)
        signOut(auth);
        signInWithEmailAndPassword(auth, userAuth.email, adminpass)
      })
      .catch((error) => {
        console.log(error);
      });
      e.target.reset();
      console.log('abd', userAuth)
  };
  
  return (
    <div className="md:w-[60%] w-[90%] mx-auto py-5">
        {userAuth?.email}
      <h1 className="font-bold text-xl mb-5 ">
        Create Account for User
      </h1>
      <form onSubmit={signUp}>
          <div className="mb-4">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
            New User Email
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
              New User password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            <label
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
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create User
          </button>
        </form>
        {newUser ? (
          <>
            <div
              className="p-2 my-2 flex justify-between mb-4 text-sm text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400"
              role="alert"
            >
              <div className="m-2">
                <span className="font-medium">Congratulations</span> User has been Created
              </div>
              <button
                onClick={handleCopy}
                className="text-white bg-blue-700 md:my-0 my-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Copy Email
              </button>
            </div>
          </>
        ) : (
          ""
        )}
    </div>
  );
};

export default Ad_AddUser;
