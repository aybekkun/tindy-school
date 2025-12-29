import { cn } from "@/lib/utils"
import { CourseCard } from "./course-card"
import { FileExclamationPoint } from "lucide-react"
import { ICourse } from "@/services/course"

interface Props {
	className?: string
	courses?: ICourse[]
}

export const CourseGrid = ({ className = ``, courses }: Props) => {
	if (!courses || courses.length === 0)
		return (
			<div className="mx-auto flex flex-col items-center py-10">
				<FileExclamationPoint className="size-12 text-muted-foreground" />
				<p className="text-muted-foreground text-lg">Not Found Any Courses</p>
			</div>
		)
	return (
		<div
			className={cn(
				"grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-y-10 lg:grid-cols-3 xl:grid-cols-4",
				className
			)}
		>
			{courses?.map((course) => (
				<CourseCard key={course.id} course={course} />
			))}
		</div>
	)
}
