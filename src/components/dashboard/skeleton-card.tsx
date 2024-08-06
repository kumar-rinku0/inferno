import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[225px] w-[350px] rounded-xl dark:bg-neutral-800" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] dark:bg-neutral-800" />
        <Skeleton className="h-4 w-[200px] dark:bg-neutral-800" />
      </div>
    </div>
  )
}
