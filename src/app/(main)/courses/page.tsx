"use client"

import {
	CourseGrid,
	CourseGridSkeleton,
} from "@/components/screens/course/course-card"
import { CourseFilterContainer } from "@/components/screens/course/course-filter"
import { useCourseFilters } from "@/components/screens/course/course-filter/use-course-filter"
import { ClientPagination } from "@/components/shared"
import { Container } from "@/components/ui"
import { useGetCourses } from "@/services/course/course.api"
import { Suspense } from "react"

function CoursesList() {
	const { filters } = useCourseFilters()
	const { data, isLoading } = useGetCourses({
		...(filters as any),
		limit: 12,
		page: filters.page || 1,
	})

	if (isLoading) {
		return (
			<Container className="py-10">
				<CourseGridSkeleton count={8} />
			</Container>
		)
	}

	return (
		<Container className="py-10">
			<CourseGrid courses={data?.data} />
			{data?.pagination && data.pagination.count > 0 && (
				<ClientPagination
					count={data.pagination.count}
					limit={12}
					className="py-10"
				/>
			)}
		</Container>
	)
}

const CoursesPage = () => {
	return (
		<>
			<Suspense fallback={null}>
				<CourseFilterContainer className="py-4 border-b" />
			</Suspense>

			<Suspense
				fallback={
					<Container className="py-10">
						<CourseGridSkeleton count={8} />
					</Container>
				}
			>
				<CoursesList />
			</Suspense>
		</>
	)
}

export default CoursesPage
