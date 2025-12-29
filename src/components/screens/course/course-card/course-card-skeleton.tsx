import { Skeleton } from "@/components/ui"

export const CourseCardSkeleton = () => {
	return (
		<div className="group relative rounded-lg">
			<div className="relative aspect-video rounded-md transition-all">
				<Skeleton className="object-cover aspect-video rounded-sm" />
			</div>
			<div className="px-0 py-3">
				<Skeleton className="text-base font-medium h-4 w-full transition group-hover:text-blue-500" />
				<Skeleton
					className="mt-1 h-4 w-full overflow-hidden "
					style={{
						display: "-webkit-box",
						WebkitBoxOrient: "vertical",
						WebkitLineClamp: 2,
					}}
				/>
			</div>
		</div>
	)
}
