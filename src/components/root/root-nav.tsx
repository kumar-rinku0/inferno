"use client";

import {
  SignInButton,
  UserButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { AppleIcon, Home } from "lucide-react";
import Link from "next/link";
import { GooeyMenu } from "../ui/gooey-menu";

const RootNav = () => {

  return (
    <>
    <div className="min-w-full w-full h-20 p-4 flex items-center justify-around">
      {/* logo */}
      <div className="flex gap-x-2">
        <AppleIcon size={20} />
        <span className="font-semibold">InferNo</span>
      </div>
      <div className="flex md:hidden w-1/2 justify-center items-end">
        Mobile-Nav
      </div>
      <div className="hidden md:flex w-1/2 justify-center gap-x-4 font-semibold">
        {/* buttons */}
        <Link href={"/dashboard"} className="hover:text-indigo-400">Dashboard</Link>
        <div className="w-1/2 hover:text-indigo-400">
        <SignedOut>
          <SignInButton fallbackRedirectUrl={"/"} forceRedirectUrl={"/dashboard"} />
        </SignedOut>
        <SignedIn>
          <SignOutButton redirectUrl="/" />
        </SignedIn>
        </div>
      </div>
    </div>
  </>
  );
};

export default RootNav;
