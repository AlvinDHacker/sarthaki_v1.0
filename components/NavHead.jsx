"use client";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import VerticalNav from "./VerticalNav";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useLayoutEffect, useState } from "react";
import { auth } from "@/lib/firebase";

const NavHead = (props) => {
  const [nav, setNav] = useState(false);
  const [newUser, setNewUser] = useState('');

  const handleNav = () => {
    setNav(!nav);
  };

  const [userAuth, setUserAuth] = useState(null);
  useLayoutEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserAuth(user);
        setNewUser(user.email)
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
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="#" className="flex items-center">
            <Image
              src="/img/download.png"
              className="mr-3"
              alt="Sarthaki Logo"
              width={30}
              height={30}
            />
            <span className="self-center text-black text-2xl font-semibold whitespace-nowrap">
              Sarthaki
            </span>
          </a>
          <div className="flex items-center">
            <a
              href="tel:9820257477"
              className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline"
            >
              Call Us
            </a>
            {userAuth ? (
              <>
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto md:px-5 px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={userSignout}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <a
                href="/login"
                className="text-sm px-3 py-2 font-semibold rounded-md text-white bg-blue-600 dark:bg-gray-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Login
              </a>
            )}
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex ">
            <div className="flex container justify-between font-medium mt-0 mr-6 text-sm">
              <div className="flex flex-row space-x-8">
                <div>
                  <a
                    href="/"
                    onClick={() => props.changeStat(1)}
                    className="text-gray-900 dark:text-white hover:underline"
                    aria-current="page"
                  >
                    Home
                  </a>
                </div>
                <div>
                  <a
                    href="/sarthaki"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Sarthaki
                  </a>
                </div>
                {
                  userAuth && (newUser == 'admin@sarthaki.com') ?
                  <div>
                  <a
                    href="/admin"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Admin Ctrl
                  </a>
                </div> : ''
                }
              </div>
              <div className="md:hidden">
                <button type="button" onClick={handleNav}>
                  <span className="sr-only">Open main menu</span>
                  {nav ? <X className="text-black rounded-md" /> : <MenuIcon className="text-black rounded-md" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {nav ? (
          <div
            className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-64 dark:bg-gray-800"
            style={{ zIndex: "5" }}
          >
            <div className="py-4 overflow-y-auto">
              <div className="flex items-center">
                <Image
                  src="/img/download.png"
                  className="mr-3"
                  alt="Sarthaki Logo"
                  width={30}
                  height={30}
                />
                <span className="self-center text-black text-2xl font-semibold whitespace-nowrap">
                  Sarthaki
                </span>
              </div>

              <VerticalNav
                changeStat={props.changeStat}
                handleNav={handleNav}
                nav={nav}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};

export default NavHead;
