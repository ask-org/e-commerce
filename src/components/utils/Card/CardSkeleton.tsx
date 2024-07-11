import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
    return (
        <div className="flex flex-col space-y-3  w-fit p-2 shadow">
            <Skeleton className="h-72 w-72 rounded-xl" />
            <div className="flex  w-full justify-between items-center  gap-3 h-full">
                <Skeleton className="h-10 flex-[3] w-full " />
                <Skeleton className="h-10 flex-[1] w-full " />
            </div>
        </div>
    )
}

