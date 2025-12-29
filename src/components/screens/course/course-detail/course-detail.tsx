import { cn } from "@/lib/utils"
import type { ICourse } from "@/services/course/course.types"

import { Separator } from "@/components/ui"
import Image from "next/image"
import { CourseInstructor } from "./course-instuctor"
import { CourseLessons } from "./course-lessons"
import { formatPriceUZS } from "@/lib/utils/format.utils"

type Props = {
	className?: string
	course: ICourse
}

export const CourseDetail = ({ className = ``, course }: Props) => {
	return (
		<div
			className={cn(
				"order-1 col-span-1 flex flex-col lg:col-span-4",
				className
			)}
		>
			<div className="relative aspect-video rounded-md transition-all">
				<Image
					src={course.image || "/placeholder.jpg"}
					alt={course.title}
					fill
					className="object-cover aspect-video rounded-sm"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
				<div className="bg-primary/85 md:hidden  p-2 rounded-sm text-sm text-white font-bold  absolute right-3 -bottom-3">
					{course.price ? formatPriceUZS(course.price) : "Biypul"}
				</div>
			</div>
			<div className="flex items-center justify-between mt-2 md:mt-4 mb-2">
				<div>
					<h3 className="text-base md:text-3xl font-medium mb-1 text-foreground">
						{course.title}
					</h3>
					<p className="text-sm md:text-base line-clamp-2 text-muted-foreground">
						{course.sub_title}
					</p>
				</div>
				<div className="hidden md:block bg-primary/85  p-3 whitespace-nowrap rounded-sm text-sm md:text-xl text-white font-bold">
					{course.price ? formatPriceUZS(course.price) : "Biypul"}
				</div>
			</div>

			<CourseInstructor creator={course.creator} />
			<Separator className="my-4" />
			<h4 className="text-base md:text-2xl font-semibold ">Kurs haqqında</h4>
			<p className="whitespace-pre-wrap">{course.description}</p>
			<h4 className="text-base md:text-2xl font-semibold mb-4">Sabaqlar</h4>
			<CourseLessons course={course} />
		</div>
	)
}
