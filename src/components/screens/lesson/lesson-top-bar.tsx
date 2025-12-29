"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { useLessonNavigation } from "@/hooks/use-lesson-navigation"
import { ICourse } from "@/services/course"
import { type FC } from "react"
import { LessonCompleteButton } from "./lesson-complete-button"

interface Props {
	course: ICourse
	lessonId?: string
	className?: string
}

export const LessonTopBar: FC<Props> = ({
	course,
	lessonId,
	className = ``,
}) => {
	const { isCompleted, navigateToNextLesson } = useLessonNavigation(
		course,
		lessonId
	)
	const currentModule = course?.modules.find((module) =>
		module?.lessons?.some((l) => l.id === lessonId)
	)

	return (
		<div className={`bg-background border-b sticky top-0  z-10 ${className}`}>
			<div className="px-4 flex items-center">
				{/* Desktop Layout */}
				<SidebarTrigger className="mr-4" />
				<div className="h-16 flex-1 flex items-center justify-between">
					{/* Breadcrumb-style title */}
					<div className="flex-1 min-w-0">
						{currentModule && (
							<div className="flex items-start flex-col">
								<span className="text-xs text-muted-foreground truncate">
									{currentModule.title}
								</span>
								<span className="font-semibold text-foreground truncate">
									{
										currentModule?.lessons?.find((l) => l.id === lessonId)
											?.title
									}
								</span>
							</div>
						)}
					</div>

					{/* Complete lesson button */}
					<LessonCompleteButton
						isCompleted={isCompleted}
						lessonId={lessonId}
						courseId={course?.id}
						onSuccess={navigateToNextLesson}
						className="hidden md:flex"
					/>
				</div>
			</div>
		</div>
	)
}
