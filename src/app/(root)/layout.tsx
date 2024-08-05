import ContextProvider from "@/components/context-provider";
import RootNav from "@/components/root/root-nav";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ContextProvider>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[size:0]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] dark:bg-[size:14px_24px] dark:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
            <RootNav />
            <main>{children}</main>
          </div>
        </div>
      </ContextProvider>
    </>
  );
};

export default RootLayout;
