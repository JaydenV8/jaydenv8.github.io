import { Skeleton } from '~/components/ui/skeleton'

export function PostLoading() {
  return (
    <div className="w-full max-w-[680px]">
      <div className="w-full p-6 space-y-4">
        <div className="w-full space-y-2">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-1/2" />
        </div>
        <Skeleton className="w-full aspect-square" />
        <div className="w-full space-y-2">
          {new Array(2).fill(0).map((_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    </div>
  )
}
