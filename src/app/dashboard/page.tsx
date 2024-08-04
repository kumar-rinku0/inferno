"use client";

import { useUser } from "@clerk/nextjs";

const Dashboard = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <>
   <div>Dashboard</div>
    <main className="text-base">
     <div>Hello, {user.firstName} welcome to inferno</div>
    </main>
    </>
  );
};

export default Dashboard;


