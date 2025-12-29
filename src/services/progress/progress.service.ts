import { $authHost } from "@/lib/api/axios.instance"
import { IResponseData, IResponseSingleData } from "../service.types"
import type { IProgress } from "./progress.types"

export const ProgressService = {
	async getAllProgress() {
		const { data } = await $authHost.get<IResponseData<IProgress>>(
			"/my-progress"
		)
		return data
	},

	async getProgressByCourseId(courseId: string) {
		const { data } = await $authHost.get<IResponseSingleData<IProgress>>(
			`/my-progress/${courseId}`
		)
		return data
	},

	async updateProgress({
		courseId,
		lessonId,
	}: {
		courseId: string
		lessonId: string
	}) {
		const { data } = await $authHost.post<IProgress>(
			`/my-progress/${courseId}`,
			{
				lesson_id: lessonId,
			}
		)
		return data
	},

	// Mark lesson as complete (alias for updateProgress)
	async markLessonComplete(courseId: string, lessonId: string) {
		return this.updateProgress({ courseId, lessonId })
	},
}
