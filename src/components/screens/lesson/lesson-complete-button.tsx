"use client"

import { Button } from "@/components/ui/button"
import { ProgressService } from "@/services/progress"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CheckCircle2, Loader2 } from "lucide-react"
import { toast } from "sonner"

interface Props {
	className?: string
	isCompleted?: boolean
	lessonId?: string
	courseId?: string
	onSuccess?: () => void
}

export const LessonCompleteButton = ({
	className = ``,
	isCompleted = false,
	lessonId,
	courseId,
	onSuccess,
}: Props) => {
	const queryClient = useQueryClient()

	const completeMutation = useMutation({
		mutationFn: async () => {
			if (!courseId || !lessonId) {
				throw new Error("Course ID hám Lesson ID kerek")
			}
			return await ProgressService.markLessonComplete(courseId, lessonId)
		},
		onSuccess: () => {
			// Invalidate progress queries to refetch updated data
			queryClient.invalidateQueries({ queryKey: ["progress", courseId] })
			toast.success("Sabaq tamamlandı!")
			// Call the onSuccess callback if provided
			if (onSuccess) {
				onSuccess()
			}
		},
		onError: (error) => {
			const errorMessage =
				error instanceof Error ? error.message : "Qátelik júz berdi"
			toast.error(errorMessage)
		},
	})

	const handleComplete = () => {
		if (!isCompleted && lessonId && courseId) {
			completeMutation.mutate()
		}
	}

	if (isCompleted) {
		return (
			<Button
				variant="outline"
				disabled
				className={className}
				onClick={(e) => e.preventDefault()}
			>
				<CheckCircle2 className="w-4 h-4" />
				Sabaq tamamlandı
			</Button>
		)
	}

	return (
		<Button
			variant="default"
			className={className}
			onClick={handleComplete}
			disabled={completeMutation.isPending}
		>
			{completeMutation.isPending ? (
				<Loader2 className="w-4 h-4 mr-2 animate-spin" />
			) : (
				<CheckCircle2 className="w-4 h-4 " />
			)}
			Sabaqtı juwmaqlaw
		</Button>
	)
}
