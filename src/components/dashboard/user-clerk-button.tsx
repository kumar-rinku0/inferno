"use client";

import { useUser, UserButton} from "@clerk/nextjs"
import { FaSpinner } from "react-icons/fa";
import { Skeleton } from "../ui/skeleton";


export const UserClerkButton = () => {
  const { isLoaded, isSignedIn} = useUser();
  if(!isLoaded || !isSignedIn) {
    return (
      <div className="w-7 h-7 flex justify-center items-center">
        {/* <FaSpinner className="w-4 animate-spin" /> */}
        <Skeleton className="w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-800"/>
      </div>
    );
  }
  return (
    <div className="w-7 h-7 flex justify-center items-center">
      <UserButton /> 
    </div>
  )
}
export default UserClerkButton;