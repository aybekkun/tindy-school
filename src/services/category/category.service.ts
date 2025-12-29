import { $authHost } from "@/lib/api/axios.instance"
import type { IResponseData, IResponseSingleData } from "../service.types"
import type { ICategory } from "./category.types"

export const CategoryService = {
	async getAll(params?: { name?: string }) {
		const { data } = await $authHost.get<IResponseData<ICategory>>(
			"/category",
			{
				params,
			}
		)
		return data
	},

	async getById(id: number | string) {
		const { data } = await $authHost.get<IResponseSingleData<ICategory>>(
			`/category/${id}`
		)
		return data
	},
}
