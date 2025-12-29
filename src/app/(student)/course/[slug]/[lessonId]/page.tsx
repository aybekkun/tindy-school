import {
	LessonBottomBar,
	LessonContent,
	LessonSidebar,
	LessonTopBar,
} from "@/components/screens/lesson"
import { Container, SidebarInset } from "@/components/ui"
import { CourseService } from "@/services/course"

interface Props {
	params: Promise<{ slug: string; lessonId: string }>
}

export const revalidate = 60

export default async function LessonPage({ params }: Props) {
	const { slug, lessonId } = await params

	// Fetch course and lesson data on server
	const { data: course } = await CourseService.getBySlugOrId(slug)
	/* 	const { data: lesson } = await CourseService.getLessonBySlug(lessonId)
	 */
	return (
		<>
			<LessonSidebar course={course} />
			<SidebarInset className="flex flex-col min-h-screen">
				{/* Top bar with module, lesson title, and complete button */}
				<LessonTopBar course={course} lessonId={lessonId} />

				{/* Main content area */}
				<div className="flex-1">
					<Container className="max-w-5xl py-6 md:py-8 pb-20">
						<LessonContent lessonId={lessonId} />
					</Container>
				</div>

				{/* Bottom navigation bar */}
				<LessonBottomBar course={course} currentLessonId={lessonId} />
			</SidebarInset>
		</>
	)
}

/**
 * Loading skeleton component
 */
// function LessonLoadingSkeleton() {
// 	return (
// 		<div className="flex h-screen">
// 			<div className="w-80 border-r p-4 space-y-4">
// 				<Skeleton className="h-8 w-full" />
// 				<Skeleton className="h-4 w-3/4" />
// 				<Skeleton className="h-64 w-full" />
// 			</div>
// 			<div className="flex-1">
// 				<div className="border-b p-4">
// 					<Skeleton className="h-6 w-1/3" />
// 				</div>
// 				<div className="p-8 space-y-4">
// 					<Skeleton className="h-96 w-full" />
// 					<Skeleton className="h-12 w-full" />
// 					<Skeleton className="h-12 w-full" />
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// /**
//  * Error state component
//  */
// function LessonErrorState({
// 	error,
// 	type,
// }: {
// 	error: Error | unknown
// 	type: "course" | "lesson" | "access" | "unpublished"
// }) {
// 	const errorMessage =
// 		error instanceof Error ? error.message : "Belgisiz qátelik júz berdi"

// 	const titles: Record<typeof type, string> = {
// 		course: "Kurs júklew qáteligi",
// 		lesson: "Sabaq júklew qáteligi",
// 		access: "Kiriw qáteligi",
// 		unpublished: "Sabaq jetkiliksiz",
// 	}

// 	return (
// 		<div className="flex items-center justify-center min-h-screen p-4">
// 			<Alert variant="destructive" className="max-w-md">
// 				<AlertCircle className="h-4 w-4" />
// 				<AlertTitle>{titles[type]}</AlertTitle>
// 				<AlertDescription className="mt-2">
// 					<p className="mb-4">{errorMessage}</p>
// 					<Button asChild variant="outline" size="sm">
// 						<Link href={ROUTES.COURSES.ROOT}>Kurslar betine qaytıw</Link>
// 					</Button>
// 				</AlertDescription>
// 			</Alert>
// 		</div>
// 	)
// }

// /**
//  * Access denied component - user needs to purchase the course
//  */
// function LessonAccessDenied({
// 	courseSlug,
// 	courseTitle,
// }: {
// 	courseSlug: string
// 	courseTitle: string
// }) {
// 	return (
// 		<div className="flex items-center justify-center min-h-screen p-4">
// 			<Alert className="max-w-md border-primary">
// 				<Lock className="h-4 w-4 text-primary" />
// 				<AlertTitle className="text-primary">Kurs satıp alıw kerek</AlertTitle>
// 				<AlertDescription className="mt-2">
// 					<p className="mb-4">
// 						&quot;{courseTitle}&quot; kursınıń sabaqlarına kiriw ushın siz aldın
// 						ala kursty satıp alıwıńız kerek.
// 					</p>
// 					<div className="flex gap-2">
// 						<Button asChild size="sm">
// 							<Link href={ROUTES.COURSES.SINGLE(courseSlug)}>
// 								<ShoppingCart className="mr-2 h-4 w-4" />
// 								Kursty satıp alıw
// 							</Link>
// 						</Button>
// 						<Button asChild variant="outline" size="sm">
// 							<Link href={ROUTES.COURSES.ROOT}>Kurslar</Link>
// 						</Button>
// 					</div>
// 				</AlertDescription>
// 			</Alert>
// 		</div>
// 	)
// }
