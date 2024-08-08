import ContextProvider from "@/components/context-provider";
import SideNav from "@/components/dashboard/side-nav";
import Header from "@/components/dashboard/header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ContextProvider>
        <Header />
        <div className="flex">
          <SideNav />
          <div className="w-full overflow-x-auto bg-accent dark:bg-primary">
            <div className="sm:h-[calc(99vh-60px)] overflow-auto">
              <div className="w-full flex justify-center mx-auto overflow-auto h-[calc(100vh-120px)] overflow-y-auto relative">
                <div className="w-full md:max-w-6xl xl:max-w-none xl:w-7xl pt-1 pl-1">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContextProvider>
    </>
  );
}
