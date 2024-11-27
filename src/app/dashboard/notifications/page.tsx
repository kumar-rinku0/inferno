import { Protect } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const Notifications = async () => {
  const { has } = await auth();
  // Check if the user is authorized
  const canAccessSettings = has({ permission: "org:notification:read" });

  // If has() returns false, the user does not have the correct permissions
  // You can choose how your app responds. This example returns null.
  if (!canAccessSettings) return <div>No access!</div>;

  return <p>Notifications</p>;
};

export default Notifications;
