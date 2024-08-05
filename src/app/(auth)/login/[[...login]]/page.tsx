import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      fallbackRedirectUrl={"/"}
      forceRedirectUrl={"/dashboard"}
      afterSignOutUrl={"/"}
    />
  );
}
