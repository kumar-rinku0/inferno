import { auth } from "@clerk/nextjs/server";

const Profile = async () => {
  const { has } = await auth();
  // Check if the user is authorized
  const canAccessSettings = has({ permission: "org:sys_profile:manage" });

  // If has() returns false, the user does not have the correct permissions
  // You can choose how your app responds. This example returns null.
  if (!canAccessSettings) return <div>NO acccess!</div>;

  return <div>Profile</div>;
};

export default Profile;
