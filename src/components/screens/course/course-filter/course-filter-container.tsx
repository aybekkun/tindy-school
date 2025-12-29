import { Container } from "@/components/ui"
import { cn } from "@/lib/utils"
import { CourseFilter } from "./course-filter"
import { CourseFilterBadges } from "./course-filter-badges"

type Props = {
	className?: string
}
export const CourseFilterContainer = ({ className = `` }: Props) => {
	return (
		<Container
			className={cn(
				"flex gap-4  md:items-center flex-col md:flex-row",
				className
			)}
		>
			<CourseFilter />
			<CourseFilterBadges />
		</Container>
	)
}
