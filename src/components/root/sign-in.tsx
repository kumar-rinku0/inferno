"use client";
import { useUser } from "@clerk/nextjs";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { FaSpinner } from "react-icons/fa";

type SignInTypes = {
  className: string;
  el?: keyof JSX.IntrinsicElements;
};

const SignIn = ({ className, el: Wrapper = "button" }: SignInTypes) => {
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
          <Wrapper className={className}>Sign in</Wrapper>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton redirectUrl="/">
          <Wrapper className={className}>Sign out</Wrapper>
        </SignOutButton>
      </SignedIn>
    </>
  );
};

export default SignIn;
