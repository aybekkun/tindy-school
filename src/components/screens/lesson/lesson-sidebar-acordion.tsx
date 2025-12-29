"use client"

import { Badge } from "@/components/ui"
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuSub,
} from "@/components/ui/sidebar"
import { useCourseProgress } from "@/hooks/use-course-progress"
import { useLessonNavigation } from "@/hooks/use-lesson-navigation"
import { ICourse, IModule } from "@/services/course"
import { useParams } from "next/navigation"
import { LessonItem } from "./lesson-item"

type Props = {
	module: IModule
	moduleIndex: number
	courseSlug: string
	course: ICourse
}

export const LessonSidebarAccordion = ({
	module,
	course,
	moduleIndex,
	courseSlug,
}: Props) => {
	const { lessonId } = useParams()
	const { completed_lesson_ids } = useCourseProgress(course.id)
	const { allLessons, isAllowed, checkLockAndNavigate } =
		useLessonNavigation(course)
	return (
		<SidebarGroup>
			<SidebarGroupLabel className="font-semibold text-sm flex gap-2">
				<Badge
					variant={"outline"}
					className="rounded-full size-6 text-xs flex items-center justify-center"
				>
					{moduleIndex + 1}
				</Badge>
				{module.title}
			</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuSub>
							{module.lessons?.map((lesson) => {
								const isCompleted =
									completed_lesson_ids?.includes(lesson.id) || false
								const isCurrent = lesson.id === lessonId
								const globalIndex = allLessons.findIndex(
									(l) => l.id === lesson.id
								)

								return (
									<LessonItem
										key={lesson.id}
										lesson={lesson}
										lessonIndex={globalIndex !== -1 ? globalIndex : 0}
										courseSlug={courseSlug}
										isLocked={!lesson.is_free && !isAllowed}
										isCompleted={isCompleted}
										isCurrent={isCurrent || false}
										onClick={() => checkLockAndNavigate(lesson)}
									/>
								)
							})}
						</SidebarMenuSub>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	)
}
