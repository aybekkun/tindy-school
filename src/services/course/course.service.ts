import { getAccessToken } from "@/lib/api/api.helper"
import { $authHost, $host } from "@/lib/api/axios.instance"
import { cache } from "react"

import type { IResponseData, IResponseSingleData } from "../service.types"
import type {
	ICourse,
	ICourseAllowed,
	ICourseParams,
	ILesson,
} from "./course.types"

export const CourseService = {
	async getAll(params?: ICourseParams) {
		const { data } = await $host.get<IResponseData<ICourse>>("/courses", {
			params,
		})
		return data
	},

	async getMyCourses() {
		const { data } = await $authHost.get<IResponseData<ICourse>>("/my-courses")
		return data
	},

	getBySlugOrId: cache(async (slugOrId: string) => {
		const { data } = await $host.get<IResponseSingleData<ICourse>>(
			`/courses/${slugOrId}`
		)
		return data
	}),

	async checkIsAllowed(slugOrId: string) {
		const { data } = await $authHost.get<ICourseAllowed>(
			`/courses/${slugOrId}/allowed`
		)
		return data
	},

	async getLessonsByModuleSlug(slug: string) {
		const { data } = await $authHost.get<IResponseData<ILesson>>(
			`/modules/${slug}/lessons`
		)
		return data
	},

	async getLessonBySlug(slug: string) {
		const token = getAccessToken()
		const api = token ? $authHost : $host

		const { data } = await api.get<IResponseSingleData<ILesson>>(
			`/lessons/${slug}`
		)
		return data
	},
}
