import { useQuery } from "@tanstack/react-query"
import { ProgressService } from "@/services/progress"

export const useCourseProgress = (course_id: string) => {
	const { data } = useQuery({
		queryKey: ["progress", course_id],
		queryFn: () => ProgressService.getProgressByCourseId(course_id),
		enabled: !!course_id,
		staleTime: 0,
	})

	return {
		last_lesson_id: data?.data?.last_lesson_id,
		completed_lesson_ids: data?.data?.completed_lesson_ids,
		progress_percent: data?.data?.progress_percent,
		course_id: data?.data?.course_id,
	}
}
