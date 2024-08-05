"use client";

import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { NavItems } from "@/config";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SideNav() {
  const navItems = NavItems();
  const [isMounted, setIsMounted] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("sidebarExpanded");
      if (saved === null) {
        return true;
      }
      return JSON.parse(saved);
    }
    return true; // default state if window is not defined
  });

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "sidebarExpanded",
        JSON.stringify(isSidebarExpanded)
      );
    }
  }, [isSidebarExpanded]);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  if(!isMounted) {
    return null;
  }

  return (
    <div className="">
      <div
        className={`${
          isSidebarExpanded ? "w-[200px]" : "w-[68px]"
        } border-r border-r-neutral-200 dark:border-r-neutral-800 transition-all duration-300 ease-in-out transform hidden sm:flex h-full bg-neutral-50 dark:bg-accent-foreground`}
      >
        <aside className="flex h-full flex-col w-full break-words px-4 overflow-x-hidden columns-1">
          {/* Top */}
          <div className="mt-4 relative pb-2">
            <div
              className={`${
                isSidebarExpanded ? "space-y-4" : "space-y-1"
              } flex flex-col transition-all duration-200`}
            >
              {navItems.map((navItem, idx) => {
                if (navItem.position === "top") {
                  return (
                    <Fragment key={idx}>
                      <div className="flex flex-col">
                        <span
                          className={`${
                            isSidebarExpanded ? "block" : "hidden"
                          } uppercase text-sm text-neutral-400 dark:text-neutral-600 font-semibold`}
                        >
                          {navItem.groupName}
                        </span>
                        {navItem.groupContent.map((item, idx2) => {
                          return (
                            <Fragment key={idx2}>
                              <div className="flex flex-col my-1">
                                <SideNavItem
                                  label={item.name}
                                  icon={item.icon}
                                  path={item.href}
                                  active={item.active}
                                  isSidebarExpanded={isSidebarExpanded}
                                />
                              </div>
                            </Fragment>
                          );
                        })}
                      </div>
                    </Fragment>
                  );
                }
              })}
            </div>
          </div>
          {/* Bottom */}
          <div className="sticky bottom-0 mt-auto whitespace-nowrap mb-2 transition duration-200 block">
            {navItems.map((navItem, idx) => {
              if (navItem.position === "bottom") {
                return (
                  <Fragment key={idx}>
                    {navItem.groupContent.map((item, idx) => {
                      return (
                        <Fragment key={idx}>
                          <div className="flex flex-col my-1">
                            <SideNavItem
                              label={item.name}
                              icon={item.icon}
                              path={item.href}
                              active={item.active}
                              isSidebarExpanded={isSidebarExpanded}
                            />
                          </div>
                        </Fragment>
                      );
                    })}
                  </Fragment>
                );
              }
            })}
          </div>
        </aside>
        <div className="mt-[calc(calc(90vh)-40px)] relative">
          <button
            type="button"
            className="absolute bottom-32 right-[-12px] flex h-6 w-6 items-center justify-center border border-neutral-300 dark:border-neutral-700 rounded-full bg-accent dark:bg-primary shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            onClick={toggleSidebar}
          >
            {isSidebarExpanded ? (
              <ChevronLeft size={16} className="stroke-foreground" />
            ) : (
              <ChevronRight size={16} className="stroke-foreground" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export const SideNavItem: React.FC<{
  label: string;
  icon: any;
  path: string;
  active: boolean;
  isSidebarExpanded: boolean;
}> = ({ label, icon, path, active, isSidebarExpanded }) => {
  return (
    <>
      {isSidebarExpanded ? (
        <Link
          href={path}
          className={`h-full relative flex items-center whitespace-nowrap rounded-md ${
            active
              ? "font-base text-sm bg-neutral-200 shadow-sm text-neutral-700 dark:bg-neutral-800 dark:text-white"
              : "hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
          }`}
        >
          <div className="relative font-base text-sm py-1.5 px-2 flex flex-row items-center space-x-2 rounded-md duration-100">
            {icon}
            <span className="font-medium">{label}</span>
          </div>
        </Link>
      ) : (
        <Link
          href={path}
          className={`h-full relative flex items-center whitespace-nowrap rounded-md ${
            active
              ? "font-base text-sm bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-white"
              : "hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
          }`}
        >
          <div className="relative font-base text-sm p-2 flex flex-row items-center space-x-2 rounded-md duration-100">
            {icon}
          </div>
        </Link>
      )}
    </>
  );
};
