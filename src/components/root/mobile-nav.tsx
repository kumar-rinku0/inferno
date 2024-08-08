import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import SignIn from "./sign-in";
import { SignedOut, SignUpButton } from "@clerk/nextjs";
import SignUp from "./sign-up";

const MobileNav = () => {
  return (
    <div className="outline-none">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <FaBars className="size-4 outline-none" />
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="end">
          <DropdownMenuItem>
            <Link href={"/dashboard"} className="w-full">
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"#pricing"} className="w-full">
              Pricing
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"#subsription"} className="w-full">
              Subscription
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <SignIn className="w-full flex justify-start" />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SignUp className="w-full flex justify-start" />
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNav;
