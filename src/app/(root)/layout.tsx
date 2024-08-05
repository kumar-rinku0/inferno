import ContextProvider from "@/components/context-provider";
import RootNav from "@/components/root/root-nav";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ContextProvider>
        <div className="absolute inset-0 -z-10 h-full w-full bg-neutral-50 dark:bg-primary/60 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[size:0]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)] dark:-z[-2] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <RootNav />
            <main>{children}</main>
          </div>
        </div>
      </ContextProvider>
    </>
  );
};

export default RootLayout;
