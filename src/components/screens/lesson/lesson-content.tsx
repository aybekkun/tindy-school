"use client"
import { Skeleton } from "@/components/ui"
import { CourseService } from "@/services/course"
import { useQuery } from "@tanstack/react-query"
import parse from "html-react-parser"
import { type FC } from "react"

interface Props {
	className?: string
	lessonId: string
}

export const LessonContent: FC<Props> = ({ className = ``, lessonId }) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["lesson", lessonId],
		queryFn: () => CourseService.getLessonBySlug(lessonId),
		enabled: !!lessonId,
		staleTime: Infinity,
	})
	if (isLoading) return <LessonLoadingSkeleton />
	if (isError) return <div>Error fetching lesson data</div>

	return (
		<div className={className}>
			{/* Video player */}
			{data?.data.video && (
				<div className="aspect-video">
					<iframe
						src={data.data.video}
						allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
						frameBorder="0"
						allowFullScreen
						style={{
							width: "100%",
							height: "100%",
							top: 0,
							left: 0,
						}}
					></iframe>
				</div>
			)}

			{/* Lesson content */}
			{data?.data.content && (
				<>
					<div className="mt-6 prose prose-neutral max-w-none dark:prose-invert">
						<div>{parse(data.data.content)}</div>
					</div>
				</>
			)}
		</div>
	)
}
function LessonLoadingSkeleton() {
	return (
		<div className="flex h-screen">
			<div className="flex-1">
				<div className="p-8 space-y-4">
					<Skeleton className="h-96 w-full" />
					<Skeleton className="h-12 w-full" />
					<Skeleton className="h-12 w-full" />
				</div>
			</div>
		</div>
	)
}
