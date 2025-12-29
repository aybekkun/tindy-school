import { Skeleton } from "@/components/ui"

export const CourseCardSkeleton = () => {
	return (
		<div className="flex flex-col space-y-3">
			<Skeleton className="aspect-video w-full rounded-md" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-3/4" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-1/2" />
			</div>
			<div className="flex items-center gap-2 mt-2">
				<Skeleton className="h-6 w-20 rounded-full" />
			</div>
		</div>
	)
}

export const CourseGridSkeleton = ({ count = 4 }: { count?: number }) => {
	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-y-10 lg:grid-cols-3 xl:grid-cols-4">
			{Array.from({ length: count }).map((_, i) => (
				<CourseCardSkeleton key={i} />
			))}
		</div>
	)
}
