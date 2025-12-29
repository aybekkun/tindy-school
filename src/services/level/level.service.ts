import { $authHost } from "@/lib/api/axios.instance"
import type { IResponseData, IResponseSingleData } from "../service.types"
import type { ILevel } from "./level.types"

export const LevelService = {
	async getAll(params?: { name?: string }) {
		const { data } = await $authHost.get<IResponseData<ILevel>>("/levels", {
			params,
		})
		return data
	},

	async getById(id: number | string) {
		const { data } = await $authHost.get<IResponseSingleData<ILevel>>(
			`/levels/${id}`
		)
		return data
	},
}
