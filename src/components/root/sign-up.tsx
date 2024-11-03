"use client";
import { SignUpButton, useUser } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { FaSpinner } from "react-icons/fa";

type SignUpProps = {
  el?: keyof JSX.IntrinsicElements;
  className: string;
};

export const SignUp = ({ className, el: Wrapper = "button" }: SignUpProps) => {
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
          <Wrapper className={className}>Create account</Wrapper>
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
