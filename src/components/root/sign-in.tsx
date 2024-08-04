"use client";
import { useUser } from "@clerk/nextjs";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { FaSpinner } from "react-icons/fa";

const SignIn = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (
        <FaSpinner className="ml-5 mt-1 size-4 animate-spin" />
    );
  }
  return (
    <>
      <SignedOut>
        <SignInButton
          fallbackRedirectUrl={"/"}
          forceRedirectUrl={"/dashboard"}
        />
      </SignedOut>
      <SignedIn>
        <SignOutButton redirectUrl="/" />
      </SignedIn>
    </>
  );
};

export default SignIn;
