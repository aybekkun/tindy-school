import type { Metadata } from "next"
import { notFound } from "next/navigation"

import {
	CourseDetail,
	CourseSidebar,
} from "@/components/screens/course/course-detail"
import { Container } from "@/components/ui"
import { CourseService } from "@/services/course"

interface Props {
	params: Promise<{ slug: string }>
}
export const revalidate = 60

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params

	const { data: course } = await CourseService.getBySlugOrId(slug).catch(() => {
		notFound()
	})

	return {
		title: course.title,
		description: course.sub_title || course.description,
		openGraph: {
			title: course.title,
			description: course.sub_title || course.description || "",
			images: course.image ? [course.image] : [],
		},
	}
}

const CourseBySlugPage = async ({ params }: Props) => {
	const { slug } = await params
	const { data: course } = await CourseService.getBySlugOrId(slug).catch(() => {
		notFound()
	})
	return (
		<Container className="py-10 grid grid-cols-1 gap-8 items-start lg:grid-cols-6">
			<CourseDetail course={course} />
			<CourseSidebar course={course} />
		</Container>
	)
}

export default CourseBySlugPage
