import { Protect } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const Settings = async () => {
  const { has } = await auth();
  // Check if the user is authorized
  const canAccessSettings = has({ permission: "org:sys_memberships:manage" });

  // If has() returns false, the user does not have the correct permissions
  // You can choose how your app responds. This example returns null.
  if (!canAccessSettings) return <div>Settings</div>;

  return <p>Admin settings</p>;
};

export default Settings;
