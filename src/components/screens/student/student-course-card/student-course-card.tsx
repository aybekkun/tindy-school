import { Badge, Card, Progress } from "@/components/ui"
import { ROUTES } from "@/constants"
import { ICourse } from "@/services/course"
import { BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Props = {
	course: ICourse
	extra?: React.ReactNode
	last_lesson_id: string
	progress_percent?: number
}

export const CourseCard = ({
	course,
	extra,
	last_lesson_id,
	progress_percent,
}: Props) => {
	return (
		<div className="border rounded-lg">
			<Link
				className="group relative rounded-lg"
				href={ROUTES.COURSES.LESSON(course.slug, last_lesson_id)}
			>
				<div className="relative aspect-video rounded-md transition-all">
					<Image
						src={course.image || "/placeholder.jpg"}
						alt={course.title}
						fill
						className="object-cover aspect-video rounded-sm"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
				<div className="px-4 py-3">
					<h3 className="text-base font-medium text-foreground transition group-hover:text-blue-500">
						{course.title}
					</h3>
					<p
						className="mt-1 overflow-hidden text-sm line-clamp-2 text-neutral-600 dark:text-neutral-300"
						style={{
							display: "-webkit-box",

							WebkitBoxOrient: "vertical",
							WebkitLineClamp: 2,
						}}
					>
						{course.sub_title}
					</p>
					<div className="mt-3 flex items-center gap-2">
						<Badge>
							<BookOpen className="mr-1 size-4" />
							<span>{course.lesson_count} sabaq</span>
						</Badge>
					</div>
				</div>
			</Link>

			<div className="p-4">
				{progress_percent !== undefined ? (
					<>
						<div className="mb-4 flex items-center justify-between text-sm">
							<span className="text-muted-foreground">
								{course.lesson_count} sabaq
							</span>
							<span className="font-semibold text-chart-1">
								{progress_percent.toFixed(0)}%
							</span>
						</div>
						<Progress value={progress_percent} className="mb-5 h-2" />
					</>
				) : (
					<div className="mt-3 flex items-center gap-2 mb-4">
						<Badge>
							<BookOpen className="mr-1 size-4" />
							<span>{course.lesson_count} sabaq</span>
						</Badge>
					</div>
				)}

				{extra}
			</div>
		</div>
	)
}
