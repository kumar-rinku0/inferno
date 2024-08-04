import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignUp
      afterSignOutUrl={"/"}
      forceRedirectUrl={"/dashboard"}
      fallbackRedirectUrl={"/"}
      appearance={{
        elements: {
          socialButtons: "h-10",
          input: "h-10",
          formButtonPrimary: "inline-flex h-10 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95",
        }
      }}
    />
  );
}
