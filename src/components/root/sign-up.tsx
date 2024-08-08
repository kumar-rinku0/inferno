"use client";
import { SignUpButton, useUser } from "@clerk/nextjs";
import {

  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Link from "next/link";
import { FaSpinner } from "react-icons/fa";

export const SignUp = ({className}: {className:string}) => {
  const { isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="w-full flex justify-center">
        <FaSpinner className="w-4 h-4 size-4 animate-spin" />
      </div>
    );
  }
  return (
    <>
      <SignedOut>
        <SignUpButton
          mode="modal"
          fallbackRedirectUrl={"/"}
          forceRedirectUrl={"/dashboard"}
        >
          <button className={className}>Create account</button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <Link href={"/dashboard/profile"} className={className}>
          Profile
        </Link>
      </SignedIn>
    </>
  );
};

export default SignUp;
