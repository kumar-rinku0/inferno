import { ThemeToggle } from "@/components/ui/theme-toggle";
import { UserClerkButton } from "@/components/dashboard/user-clerk-button";
import MobileNav from "../root/mobile-nav";

const Header = () => {
  return (
    <>
      <header className="flex items-center h-16 px-4 border-b border-b-neutral-200 dark:border-b-neutral-800 shrink-0 md:px-6 justify-between">
        <div className="flex items-center justify-center gap-4">
          <div className="flex justify-center items-center">
            <UserClerkButton />
          </div>
          <div>
            <ThemeToggle />
          </div>
        </div>
        {/* <Link
          href="/"
          className="flex items-center justify-center gap-2 text-lg font-semibold md:text-base"
          prefetch={false}
        >
          <FaFireFlameCurved size={24} className="font-bold text-sky-300" />
          <span className="font-bold text-lg text-primary dark:text-white">
            InferNo
          </span>
        </Link> */}
        <div className="z-10 sm:hidden">
          <MobileNav />
        </div>
      </header>
    </>
  );
};

export default Header;
