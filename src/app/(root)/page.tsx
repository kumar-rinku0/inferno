import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import AnimatedText from "@/components/root/animated-text";
export default function Home() {
  return (
    <div className="mx-6 p-1 h-[calc(90vh+20px)]">
      <div className="w-full flex justify-center items-center font-bold p-6">
      <AnimatedText className="text-5xl text-neutral-500" text="Welcome to InferNo...!!" animation={{hidden:{opacity:0, x:-10}, visible:{opacity:1, x:0,}}} />
      </div>
    </div>
  );
}
