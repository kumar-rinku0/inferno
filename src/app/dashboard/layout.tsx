
import SideNav from "@/components/side-nav";
import Header from "@/components/header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="flex">
        <SideNav />
        <div className="w-full overflow-x-auto">
          <div className="sm:h-[calc(99vh-60px)] overflow-auto">
            <div className="w-full flex justify-center mx-auto overflow-auto h-[calc(100vh-120px)] overflow-y-auto relative">
              <div className="w-full md:max-w-6xl 2xl:max-w-7xl">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
