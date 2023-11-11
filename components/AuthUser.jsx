"use client";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";

const AuthUser = () => {
  const [userAuth, setUserAuth] = useState(null);
  useEffect(() => {
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

  const userSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signout Success");
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <div className="md:w-[60%] w-[90%] mx-auto">
        {userAuth ? (
          <>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={userSignout}
            >
              Sign Out
            </button>
          </>
        ) : (
          <p>Signed Out</p>
        )}
      </div>
    </div>
  );
};

export default AuthUser;
