import { Badge } from "@/components/ui"
import { ROUTES } from "@/constants"
import { formatPriceUZS } from "@/lib/utils/format.utils"
import { ICourse } from "@/services/course"
import { BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Props = {
	course: ICourse
	extra?: React.ReactNode
}

export const CourseCard = ({ course }: Props) => {
	return (
		<Link
			href={ROUTES.COURSES.SINGLE(course.slug)}
			className="group relative rounded-lg"
		>
			<div className="relative aspect-video rounded-md transition-all">
				<Image
					src={course.image || "/placeholder.jpg"}
					alt={course.title}
					fill
					className="object-cover aspect-video rounded-sm"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
				<div className="bg-primary/85 p-2 rounded-sm text-sm text-white font-bold  absolute right-3 -bottom-3">
					{course.price ? formatPriceUZS(course.price) : "Biypul"}
				</div>
			</div>
			<div className="px-0 py-3">
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
	)
}
