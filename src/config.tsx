import { group } from "console";
import { Bell, Briefcase, Home, LayoutDashboard, Settings, User } from "lucide-react"
import { usePathname } from "next/navigation"

export const NavItems = () => {
  const pathname = usePathname();
  function isNavItemActive(pathname: string, path: string) {
    return pathname.includes(path)
  }
  return [
    {
      groupName: "menu",
      position: "top",
      groupContent: [
        {
          name: "Dashboard",
          href: "/dashboard",
          icon: <LayoutDashboard size={20} />,
          active: pathname === "/dashboard",
        },
        {
          name: "Projects",
          href: "/dashboard/projects",
          icon: <Briefcase size={20} />,
          active: isNavItemActive(pathname, "/dashboard/projects"),
        },
      ]
    },
    {
      groupName: "overview",
      position: "top",
      groupContent: [
        {
          name: "Profile",
          href: "/dashboard/profile",
          icon: <User size={20} />,
          active: isNavItemActive(pathname, "/dashboard/profile"),
        },
        {
          name: "Notifications",
          href: "/dashboard/notifications",
          icon: <Bell size={20} />,
          active: isNavItemActive(pathname, "/dashboard/notifications"),
        },
      ]
    },
    {
      groupName: "",
      position: "bottom",
      groupContent: [
        {
          name: "Settings",
          href: "/dashboard/settings",
          icon: <Settings size={20} />,
          active: isNavItemActive(pathname, "/dashboard/settings"),
        },
      ]
    }
  ]
}