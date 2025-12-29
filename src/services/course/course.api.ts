import { useQuery } from "@tanstack/react-query"
import { CourseService } from "./course.service"
import { ICourseParams } from "./course.types"

export const useGetCourseBySlug = (slug: string) => {
	return useQuery({
		queryKey: ["course", slug],
		queryFn: () => CourseService.getBySlugOrId(slug),
		staleTime: 60 * 60 * 1000,
	})
}
export const useIsAllowedQuery = (slug: string) => {
	return useQuery({
		queryKey: ["course", slug],
		queryFn: () => CourseService.checkIsAllowed(slug),
		staleTime: Infinity,
	})
}

export const useGetCourses = (params?: ICourseParams) => {
	return useQuery({
		queryKey: ["courses", params],
		queryFn: () => CourseService.getAll(params),
	})
}
