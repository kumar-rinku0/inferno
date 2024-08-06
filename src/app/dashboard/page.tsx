"use client";

import { SkeletonCard } from "@/components/dashboard/skeleton-card";
import { useUser } from "@clerk/nextjs";

const Dashboard = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <>
    <div className="h-10 p-2 w-full text-base">
     <div>Hello, {user.firstName} welcome to inferno</div>
    </div>
    <div className="w-full flex items-center justify-center">
    <div className="flex justify-evenly flex-wrap gap-4">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
    </div>
    </>
  );
};

export default Dashboard;


