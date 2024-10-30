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
      <div className="btn cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <FaBars size={20} />
      </div>
      <div
        className={`${
          isOpen ? `right-0 black-shadow dark:white-shadow` : `-right-64`
        } side-bar h-[100vh] w-64 fixed top-0 bg-accent dark:bg-primary transition-all duration-200 ease-linear`}
      >
        <div className="logo flex justify-between items-center px-5 py-5 black-shadow dark:white-shadow">
          <Link href={"/"} className="text-lg">
            inferno
          </Link>
          <FaX
            onClick={() => setIsOpen(!isOpen)}
            className="hover:text-red-500 transition-colors cursor-pointer"
          />
        </div>
        <div className="menu">
          <ul className="flex flex-col justify-start gap-4 py-4">
            <li
              className="flex justify-start items-center gap-2 p-2 hover:gray-shadow"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaDashcube />
              <Link href="/dashboard" className="w-full">
                Dashboard
              </Link>
            </li>
            <li
              className="flex justify-start items-center gap-2 p-2 hover:gray-shadow"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaBell />
              <Link href="/dashboard/notifications" className="w-full">
                Notification
              </Link>
            </li>
            <li
              className="flex justify-center items-center gap-2 p-2 hover:gray-shadow"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isSignedIn ? <FaSignOutAlt /> : <FaSignInAlt />}
              <SignIn className="w-full flex justify-start" />
            </li>
            <li
              className="flex justify-center items-center gap-2 p-2 hover:gray-shadow"
              onClick={() => setIsOpen(!isOpen)}
            >
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
