"use client"

import { DashboardCard } from "@/components/shared"
import { Button, Container, Skeleton } from "@/components/ui"
import { ROUTES } from "@/constants"
import { useGetMyProgress } from "@/services/progress"
import { Award, BookOpen, Clock, PlayCircle, TrendingUp } from "lucide-react"
import Link from "next/link"
import { CourseCard } from "../student-course-card/student-course-card"

type Props = {
	className?: string
}

export const MyCourses = ({ className = `` }: Props) => {
	const { data, isLoading, isError } = useGetMyProgress()
	const courseData = data?.data || []
	const totalCourses = courseData.length
	const completedCourses = courseData.filter(
		(item) => item.progress_percent === 100
	).length
	const avgProgress =
		totalCourses > 0
			? courseData.reduce((acc, item) => acc + item.progress_percent, 0) /
			  totalCourses
			: 0

	if (isLoading) {
		return (
			<Container className={className}>
				<div className="mb-8">
					<Skeleton className="h-12 w-64 mb-2" />
					<Skeleton className="h-6 w-96" />
				</div>
				<div className="mb-8 grid gap-4 md:grid-cols-3">
					{[1, 2, 3].map((i) => (
						<Skeleton key={i} className="h-32 w-full" />
					))}
				</div>
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{[1, 2, 3].map((i) => (
						<Skeleton key={i} className="h-80 w-full" />
					))}
				</div>
			</Container>
		)
	}

	if (isError) {
		return (
			<div className="flex h-[50vh] flex-col items-center justify-center gap-4">
				<h2 className="text-2xl font-bold text-foreground">
					Kurslardı júklewde qátelik
				</h2>
				<p className="text-muted-foreground">Iltimas, qaytadan urınıp kóriń.</p>
				<Button onClick={() => window.location.reload()}>
					Qaytadan urınıp kóriń
				</Button>
			</div>
		)
	}

	return (
		<Container className={className}>
			{/* Header */}
			<div className="mb-8">
				<h1 className="mb-2 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
					Meniń kurslarım
				</h1>
				<p className="text-balance text-lg text-muted-foreground">
					Siz oqıp atırǵan kurslar dizimi hám progressińiz
				</p>
			</div>

			{/* Stats Grid */}
			<div className="mb-8 grid gap-4 grid-cols-2 md:grid-cols-3">
				<DashboardCard
					name="Jámi kurslar"
					count={totalCourses}
					icon={BookOpen}
					className="bg-primary"
				/>
				<DashboardCard
					name="Ortasha progress"
					count={`${avgProgress.toFixed(0)}%`}
					icon={TrendingUp}
					className="bg-amber-500"
				/>
				<DashboardCard
					name="Juwaqlanǵan"
					count={`${completedCourses}/${totalCourses}`}
					icon={Clock}
					className="bg-chart-2"
				/>
			</div>

			{/* Courses Grid */}
			{totalCourses === 0 ? (
				<div className="flex flex-col items-center justify-center gap-4 py-20">
					<BookOpen className="size-16 text-muted-foreground" />
					<h2 className="text-2xl font-bold text-center">
						Siz ele bir de kurs baslamaǵansız
					</h2>
					<Link href={ROUTES.HOME}>
						<Button size="lg">Kurslardı tabıw</Button>
					</Link>
				</div>
			) : (
				<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
					{courseData.map((item) => (
						<CourseCard
							key={item.course.id}
							course={item.course}
							last_lesson_id={item.last_lesson_id}
							progress_percent={item.progress_percent}
							extra={
								<div className="flex items-center justify-between gap-4">
									<div className="flex flex-col">
										<span className="text-xs text-muted-foreground">
											Jańalanǵan
										</span>
										<span className="text-sm font-medium">
											{new Date(item.updated_at).toLocaleDateString("kaa-UZ", {
												day: "numeric",
												month: "short",
											})}
										</span>
									</div>

									{item.progress_percent === 100 ? (
										<Link
											href={ROUTES.PROFILE.CERTIFICATES}
											className="w-full max-w-35"
										>
											<Button
												className="w-full gap-2 border-emerald-500 text-emerald-500 hover:bg-emerald-50 md:text-sm text-xs px-2"
												variant="outline"
												size="sm"
											>
												<Award className="size-4" />
												Sertifikat
											</Button>
										</Link>
									) : (
										<Link
											href={ROUTES.COURSES.LESSON(
												item.course.slug,
												item.last_lesson_id
											)}
											className="w-full max-w-35"
										>
											<Button
												className="w-full gap-2 md:text-sm text-xs px-2"
												size="sm"
											>
												<PlayCircle className="size-4" />
												Dawam etiw
											</Button>
										</Link>
									)}
								</div>
							}
						/>
					))}
				</div>
			)}
		</Container>
	)
}
