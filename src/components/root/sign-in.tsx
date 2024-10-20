"use client";
import { useUser } from "@clerk/nextjs";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { FaSpinner } from "react-icons/fa";

const SignIn = ({className}: {className:string}) => {
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
        <SignInButton
          mode="modal"
          fallbackRedirectUrl={"/"}
          forceRedirectUrl={"/dashboard"}
        >
          <button className={className}>Sign in</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton redirectUrl="/">
          <button className={className}>Sign out</button>
        </SignOutButton>
      </SignedIn>
    </>
  );
};

export default SignIn;
