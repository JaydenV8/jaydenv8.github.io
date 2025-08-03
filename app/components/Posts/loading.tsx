import { Skeleton } from '~/components/ui/skeleton'

export function PostsLoading() {
  return (
    <div className="w-full max-w-[680px]">
      {new Array(3).fill(0).map((_, i) => (
        <div key={i} className="w-full grid p-6 grid-cols-[1fr_80px] md:grid-cols-[1fr_120px] gap-4">
          <div className="w-full space-y-2">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-4 w-1/3 mt-3" />
          </div>
          <Skeleton className="aspect-square rounded-lg" />
        </div>
      ))}
    </div>
  )
}
