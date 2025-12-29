"use client"
import { Badge } from "@/components/ui"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { useCourseFilters } from "./use-course-filter"

type Props = {
	className?: string
}

export const CourseFilterBadges = ({ className = `` }: Props) => {
	const { getActiveBadges, removeFilter } = useCourseFilters()

	if (!getActiveBadges().length) return null

	return (
		<div className={cn("flex flex-wrap gap-2", className)}>
			{getActiveBadges().map((b, i) => (
				<Badge
					key={`${b.filterKey}-${b.value}-${i}`}
					variant="secondary"
					className="cursor-pointer gap-1.5"
					onClick={() => removeFilter(b.filterKey, b.value)}
				>
					{b.label}
					<X className="size-2" />
				</Badge>
			))}
		</div>
	)
}
