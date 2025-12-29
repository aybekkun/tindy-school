"use client"

import { Button } from "@/components/ui/button"
import { useLessonNavigation } from "@/hooks/use-lesson-navigation"
import { ICourse } from "@/services/course"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { type FC } from "react"
import { LessonCompleteButton } from "./lesson-complete-button"

interface Props {
	course?: ICourse
	currentLessonId?: string
	className?: string
}

export const LessonBottomBar: FC<Props> = ({
	course,
	currentLessonId,
	className = ``,
}) => {
	const {
		previousLesson,
		nextLesson,
		isCompleted,
		navigateToNextLesson,
		navigateToPreviousLesson,
	} = useLessonNavigation(course, currentLessonId)

	if (!previousLesson && !nextLesson) return null

	return (
		<div
			className={`sticky bottom-0 left-0 right-0 border-t bg-background ${className}`}
		>
			<div className="px-4 py-3 md:py-4">
				{/* Desktop Layout */}
				<div className="flex items-center justify-between gap-4">
					{/* Previous lesson button */}
					{previousLesson && course ? (
						<Button
							variant="outline"
							className="gap-2"
							onClick={navigateToPreviousLesson}
						>
							<ChevronLeft className="w-4 h-4" />
							<span className="hidden md:block">Aldıńǵı sabaq</span>
						</Button>
					) : (
						<div />
					)}
					<LessonCompleteButton
						lessonId={currentLessonId}
						courseId={course?.id}
						isCompleted={isCompleted}
						onSuccess={navigateToNextLesson}
						className="flex md:hidden z-10"
					/>
					{/* Next lesson button */}
					{nextLesson && course ? (
						<Button
							variant="default"
							className="gap-2"
							onClick={navigateToNextLesson}
						>
							<span className="hidden md:block">Keyingi sabaq</span>
							<ChevronRight className="w-4 h-4" />
						</Button>
					) : (
						<div />
					)}
				</div>
			</div>
		</div>
	)
}
