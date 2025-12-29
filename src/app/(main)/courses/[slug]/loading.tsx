import { Container, Skeleton } from "@/components/ui"

export default function CourseLoading() {
	return (
		<Container className="py-10">
			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-4">
					<Skeleton className="aspect-video w-full rounded-md" />
					<div className="flex flex-col gap-2 mt-4">
						<Skeleton className="h-8 w-3/4" />
						<Skeleton className="h-4 w-1/2" />
					</div>
				</div>
			</div>
		</Container>
	)
}
