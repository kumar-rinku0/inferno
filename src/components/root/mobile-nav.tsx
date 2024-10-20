"use client";

import Link from "next/link";
import {
  FaBars,
  FaDashcube,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import SignIn from "./sign-in";
import { SignedOut, SignUpButton, useUser } from "@clerk/nextjs";
import SignUp from "./sign-up";
import { FaBell, FaX } from "react-icons/fa6";
import { useState } from "react";

type MobileNavProp = {
  side?: string;
};

const MobileNav = ({ side }: MobileNavProp) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoaded, isSignedIn } = useUser();
  return (
    <div className="outline-none">
      <div className="btn">
        <FaBars size={20} onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div
        className={`${
          isOpen ? `right-0` : `-right-64`
        } side-bar h-[100vh] w-64 fixed top-0 bg-slate-400 transition-all duration-200 ease-linear`}
      >
        <div className="logo flex justify-between items-center px-8 py-6">
          <Link href={"/"} className="text-lg">
            inferno
          </Link>
          <FaX onClick={() => setIsOpen(!isOpen)} />
        </div>
        <div className="menu">
          <ul className="flex flex-col justify-start gap-4">
            <li className="flex justify-start items-center gap-2 p-2">
              <FaDashcube />
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="flex justify-start items-center gap-2 p-2">
              <FaBell />
              <Link href="/dashboard/notifications">Notification</Link>
            </li>
            <li className="flex justify-center items-center gap-2 p-2">
              {isSignedIn ? <FaSignOutAlt /> : <FaSignInAlt />}
              <SignIn className="w-full flex justify-start" />
            </li>
            <li className="flex justify-center items-center gap-2 p-2">
              {isSignedIn ? <FaUser /> : <FaSignOutAlt />}
              <SignUp className="w-full flex justify-start" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
