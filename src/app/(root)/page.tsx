import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
export default function Home() {
  return (
    <div>
      <ScrollArea className="h-full w-full ">
          HomePage
          <div className="w-fit">
            <ThemeToggle />
          </div>
          <div className="text-xl w-32">
          Jokester began sneaking into the castle in the middle of the night and leaving
  jokes all over the place: under the king's pillow, in his soup, even in the
  royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
  then, one day, the people of the kingdom discovered that the jokes left by
  Jokester were so funny that they couldn't help but laugh. And once they
  started laughing, they couldn't stop.
          </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
}
