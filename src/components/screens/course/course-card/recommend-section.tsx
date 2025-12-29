import { cn } from "@/lib/utils"

import { Container } from "@/components/ui"
import { ICourse } from "@/services/course"
import { CourseGrid } from "./course-grid"

type Props = {
	className?: string
	courses?: ICourse[]
	title?: string
	description?: string
}

export const RecommendedSection = ({
	courses,
	className = "",
	title,
	description,
}: Props) => {
	return (
		<section className={cn("antialiased", className)}>
			<Container>
				{title && (
					<h2 className="mb-3 text-xl sm:text-2xl font-semibold text-foreground md:text-3xl lg:text-4xl">
						{title}
					</h2>
				)}
				{description && (
					<p className="mb-3 max-w-2xl text-muted-foreground md:text-lg">
						{description}
					</p>
				)}
				<CourseGrid courses={courses} />
			</Container>
		</section>
	)
}
