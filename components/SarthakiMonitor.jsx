"use client";
import NavHead from "./NavHead";
import VerticalNav from "./VerticalNav";
import Sarthakipg from "./Sarthakipg";
import UpdateInfo from "./UpdateInfo";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useLayoutEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import Authenticate from "./Authenticate";
import { useRouter } from "next/navigation";

const SarthakiMonitor = () => {
  const [homeStat, setHomeStat] = useState(1);

  const changeStat = (index) => {
    setHomeStat(index);
  };

  const router = useRouter()

  const [userAuth, setUserAuth] = useState(null);
  useLayoutEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserAuth(user);
      } else {
        setUserAuth(null);
        router.push('/login')
      }
    });
  }, []);

  return (
    <div>
      {
        userAuth ?
        <>
          <NavHead changeStat={changeStat} />
          <div className="md:mx-6 mx-3 mt-2">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-3">
              <div className="md:block hidden">
                <div className="rounded-md border-b-gray-600 p-3 h-[98%] md:m-3 m-1 bg-gray-300">
                  <h1 className="font-bold text-xl">Quick Links</h1>
                  <VerticalNav changeStat={changeStat} />
                </div>
              </div>
              <div className="lg:col-span-3">
                {homeStat === 1 ? <Sarthakipg /> : ""}
                {homeStat === 2 || 3 || 4 || 5 || 6 || 7 ? (
                  <UpdateInfo homeStat={homeStat} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </> : <>
        <div className="h-screen">
          {" "}
          </div></>
      }
    </div>
  );
};

export default SarthakiMonitor;
