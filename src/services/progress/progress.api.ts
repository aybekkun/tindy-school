import { useQuery } from "@tanstack/react-query"
import { ProgressService } from "./progress.service"

export const useGetMyProgress = () => {
	return useQuery({
		queryKey: ["my-progress"],
		queryFn: () => ProgressService.getAllProgress(),
	})
}

export const useGetCourseProgress = (courseId: string) => {
	return useQuery({
		queryKey: ["course-progress", courseId],
		queryFn: () => ProgressService.getProgressByCourseId(courseId),
		enabled: !!courseId,
	})
}
