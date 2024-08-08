"use client";

import Link from "next/link";
import SignIn from "@/components/root/sign-in";
import { FaFireFlameCurved } from "react-icons/fa6";
import MobileNav from "./mobile-nav";

const RootNav = () => {
  return (
    <>
      <div className="min-w-full w-full h-20 p-4 flex items-center justify-around">
        <div className="flex w-11/12 md:w-1/2 gap-x-2 justify-start items-center">
          <FaFireFlameCurved size={24} className="font-bold text-sky-300" />
          <span className="font-bold text-lg text-primary dark:text-white">
            InferNo
          </span>
        </div>
        <div className="flex md:hidden w-1/12 justify-center items-center">
          <MobileNav />
        </div>
        <div className="hidden md:flex w-1/2 justify-center gap-x-4 font-semibold">
          <Link href={"/dashboard"} className="hover:text-indigo-400">
            Dashboard
          </Link>
          <div className="w-1/4 hover:text-indigo-400">
            <SignIn className="w-full flex justify-center" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RootNav;
