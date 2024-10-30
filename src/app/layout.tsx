import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import imgURL from "../../public/inferno-sign.png";

const img =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Flogo-design&psig=AOvVaw3BifLepnc2WXtMgrA-S8ue&ust=1730349045587000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjhtNOitYkDFQAAAAAdAAAAABAI";

import "./globals.css";
import ContextProvider from "@/components/context-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "project-06",
  description: "created by next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          headerTitle: "text-xl text-neutral-500",
          headerSubtitle: "",
          modalCloseButton:
            "focus:outline-none focus:shadow-none h-10 w-10 text-black rounded-full",
          socialButtonsBlockButton__apple: "h-10",
          socialButtonsBlockButton__google: "h-10",
          input: "h-10",
          formButtonPrimary:
            "inline-flex h-10 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95",
          logoBox: "h-10",
        },
        layout: {
          logoImageUrl: `https://cdn.jsdelivr.net/gh/kumar-rinku0/inferno/public/inferno-sign.png`,
          logoLinkUrl: "/",
          logoPlacement: "inside",
          socialButtonsPlacement: "top",
          socialButtonsVariant: "blockButton",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${poppins.className} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
