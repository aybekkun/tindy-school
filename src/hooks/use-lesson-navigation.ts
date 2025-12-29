import { ROUTES } from "@/constants"
import { ICourse } from "@/services/course"
import { useAuthStore } from "@/store"
import { useRouter } from "next/navigation"
import { useMemo } from "react"
import { toast } from "sonner"
import { ILesson } from "./../services/course/course.types"
import { useCourseProgress } from "./use-course-progress"
import { useIsAllowed } from "./use-is-allowed"

interface LessonWithModule extends ILesson {
	moduleId: string
	slug: string
}

/**
 * Hook for managing lesson navigation and progress tracking
 *
 * @param course - The course object containing modules and lessons
 * @param currentLessonId - The ID of the current lesson
 * @returns Object containing navigation state and helper functions
 */
export const useLessonNavigation = (
	course?: ICourse,
	currentLessonId?: string
) => {
	const isAllowed = useIsAllowed(course?.slug || "")
	const { completed_lesson_ids } = useCourseProgress(course?.id || "")
	const { isAuth } = useAuthStore()
	const router = useRouter()

	// Get all lessons in flat array
	const allLessons = useMemo(() => {
		if (!course) return []
		return course.modules.flatMap((module) =>
			(module.lessons || []).map((lesson) => ({
				...lesson,
				moduleId: module.id,
			}))
		) as LessonWithModule[]
	}, [course])

	// Find current lesson index
	const currentIndex = useMemo(() => {
		return allLessons.findIndex((lesson) => lesson.id === currentLessonId)
	}, [allLessons, currentLessonId])

	// Get previous and next lessons
	const previousLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null
	const nextLesson =
		currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null

	// Check if current lesson is completed
	const isCompleted =
		completed_lesson_ids?.includes(currentLessonId || "") || false

	const checkLockAndNavigate = (lesson: ILesson) => {
		const isLocked = !lesson.is_free && !isAllowed

		if (isLocked) {
			if (!isAuth) {
				toast.error("Sabaqtı kóríw ushın dáslep dizimnen ótiń", {
					description: "Kiriw yamasa dizimnen ótiw betine jollanba",
				})
				router.push(
					ROUTES.AUTH.LOGIN(ROUTES.COURSES.SINGLE(course?.slug || ""))
				)
				return
			}

			toast.error("Bul sabaq kóre alıw ushın kurstı satıp alıń", {
				description: "Sabaqtı kóre alıw ushın kurstı satıp alıń",
			})
			return
		}

		if (course) {
			router.push(`/course/${course.slug}/${lesson.id}`)
		}
	}

	// Navigate to next lesson
	const navigateToNextLesson = () => {
		if (nextLesson && course) {
			checkLockAndNavigate(nextLesson)
		}
	}

	// Navigate to previous lesson
	const navigateToPreviousLesson = () => {
		if (previousLesson && course) {
			checkLockAndNavigate(previousLesson)
		}
	}

	return {
		isAllowed,
		isAuth,
		allLessons,
		currentIndex,
		previousLesson,
		nextLesson,
		isCompleted,
		completed_lesson_ids,
		navigateToNextLesson,
		navigateToPreviousLesson,
		checkLockAndNavigate,
	}
}
