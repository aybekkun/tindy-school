import {
	CourseGridSkeleton,
	RecommendedSection,
} from "@/components/screens/course/course-card"
import {
	Container,
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "@/components/ui"
import { CollectionService } from "@/services/collection"
import { Metadata } from "next"
import { Suspense } from "react"
import { FeaturesSection } from "./_components/features-section"
import { HeroSection } from "./_components/hero-section"
import { JoinSection } from "./_components/join-section"

export const revalidate = 3600 // ISR every hour

export const generateMetadata = async (): Promise<Metadata> => {
	try {
		const { data: collections } = await CollectionService.getAll()
		const allCourses =
			collections
				?.flatMap((c) => c.courses.map((cc) => cc.course.title))
				.join(", ") || ""

		return {
			title: "Tindy - Onlayn Mektep",
			description: `Eń jaqsı onlayn kurslar: ${allCourses.slice(0, 150)}...`,
			openGraph: {
				title: "Tindy - Onlayn Mektep",
				description: "Tindy platformasında bilimińizdi asırıń.",
				type: "website",
			},
			keywords: [
				"onlayn kurslar",
				"mektep",
				"oqıw",
				"tindy",
				...(collections?.map((c) => c.title) || []),
			],
		}
	} catch {
		return {
			title: "Tindy - Onlayn Mektep",
			description: "Tindy platformasında bilimińizdi asırıń.",
		}
	}
}

async function CollectionList() {
	try {
		const { data: collections } = await CollectionService.getAll()

		if (!collections?.length) {
			return (
				<Container className="py-10">
					<Empty>
						<EmptyHeader>
							<EmptyTitle>Kurslar joq</EmptyTitle>
							<EmptyDescription>
								Házirshe bul jerde kurslar joq. Birazdan keyin qaytıwdı usınıs
								etemiz.
							</EmptyDescription>
						</EmptyHeader>
					</Empty>
				</Container>
			)
		}

		return (
			<>
				{collections.map((collection) => (
					<RecommendedSection
						key={collection.id}
						className="py-4"
						courses={collection.courses.map((c) => c.course)}
						title={collection.title}
						description={collection.description}
					/>
				))}
			</>
		)
	} catch {
		return (
			<Container className="py-10">
				<Empty>
					<EmptyHeader>
						<EmptyTitle>Kurslar joq</EmptyTitle>
						<EmptyDescription>
							Kurslardı júklewde qátelik júz berdi yamasa kurslar tabilmadı.
						</EmptyDescription>
					</EmptyHeader>
				</Empty>
			</Container>
		)
	}
}

function CollectionSkeleton() {
	return (
		<div className="py-4">
			<Container>
				<div className="mb-8 space-y-4">
					<div className="h-10 w-64 bg-zinc-200 dark:bg-zinc-800 animate-pulse rounded-md" />
					<div className="h-6 w-96 bg-zinc-200 dark:bg-zinc-800 animate-pulse rounded-md" />
				</div>
				<CourseGridSkeleton count={4} />
			</Container>
		</div>
	)
}

const MainPage = () => {
	return (
		<>
			<HeroSection />
			<FeaturesSection />
			<Suspense fallback={<CollectionSkeleton />}>
				<CollectionList />
			</Suspense>
			<JoinSection />
		</>
	)
}

export default MainPage
