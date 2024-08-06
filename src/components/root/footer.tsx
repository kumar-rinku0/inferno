import Link from "next/link";
import React from "react";
import { FaDiscord, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Footer = () => {
  return (
    <div className="container w-full h-fit">
      <div className="flex flex-col md:flex-row justify-evenly items-center mb-5">
      <div className="flex flex-col justify-center items-center py-4">
        <h3 className="text-xl font-bold text-primary dark:text-white">InferNo</h3>
        <p className="text-gray-500 font-semibold text-sm">
          Let me help you to grow!!
          <span className="text-red-500"> ❤</span>
        </p>
      </div>
      <div className="w-fit">
        <ThemeToggle />
      </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-x-5 text-xs">
        <Link prefetch={false} href="/">Terms and conditions</Link>
        <Link prefetch={false} href="/">Privacy policy</Link>
        <Link prefetch={false} href="/">Contect</Link>
        <Link prefetch={false} href="/">API docs</Link>
        <Link prefetch={false} href="/">Refund policy</Link>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-around items-center my-5">
        <div className="flex flex-wrap justify-center items-center text-xs">Copyright © 2024 InferNo, All rights reserved.</div>
        <div>
          <div className="flex flex-row gap-4 items-center p-10">
            <Link href={"/"} prefetch={false}>
              <FaGithub className="w-5" />
            </Link>
            <Link href={"/"} prefetch={false}>
              <FaDiscord className="w-5" />
            </Link>
            <Link href={"/"} prefetch={false}>
              <FaYoutube className="w-5" />
            </Link>
            <Link href={"/"} prefetch={false}>
              <FaInstagram className="w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
