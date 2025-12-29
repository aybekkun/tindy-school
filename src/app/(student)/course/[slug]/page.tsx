"use client"

import {
	CourseDetail,
	CourseSidebar,
} from "@/components/screens/course/course-detail"
import { Container, Skeleton } from "@/components/ui"
import { ROUTES } from "@/constants"
import { useGetCourseBySlug } from "@/services/course"
import { useGetCourseProgress } from "@/services/progress"
import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"

const CoursePage = () => {
	const { slug } = useParams<{ slug: string }>()
	const router = useRouter()

	const { data: courseResp, isLoading: isCourseLoading } =
		useGetCourseBySlug(slug)
	const courseId = courseResp?.data?.id
	const { data: progressResp, isLoading: isProgressLoading } =
		useGetCourseProgress(courseId as string)

	useEffect(() => {
		if (progressResp?.data?.last_lesson_id) {
			router.replace(
				ROUTES.COURSES.LESSON(slug, progressResp.data.last_lesson_id)
			)
		}
	}, [progressResp, slug, router])

	if (isCourseLoading || isProgressLoading) {
		return (
			<Container className="py-10">
				<div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-6">
					<div className="lg:col-span-4 space-y-4">
						<Skeleton className="aspect-video w-full rounded-md" />
						<Skeleton className="h-10 w-3/4" />
						<Skeleton className="h-6 w-1/2" />
						<Skeleton className="h-32 w-full" />
					</div>
					<div className="lg:col-span-2">
						<Skeleton className="h-100 w-full rounded-md" />
					</div>
				</div>
			</Container>
		)
	}

	if (!courseResp?.data) {
		return (
			<Container className="py-10">
				<div className="flex flex-col items-center justify-center py-20 text-center">
					<h1 className="text-2xl font-bold mb-2">Kurs tabılmadı</h1>
					<p className="text-muted-foreground">
						Iltimas, kiritilgen maǵlıwmattı tekserip kóriń.
					</p>
				</div>
			</Container>
		)
	}

	const course = courseResp.data

	return (
		<Container className="py-10 grid grid-cols-1 gap-8 items-start lg:grid-cols-6">
			<CourseDetail course={course} />
			<CourseSidebar course={course} />
		</Container>
	)
}

export default CoursePage
