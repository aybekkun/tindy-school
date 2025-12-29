import { $host } from "@/lib/api/axios.instance"
import type { ICollection } from "./collection.types"
import { IResponseData, IResponseSingleData } from "../service.types"

export const CollectionService = {
	async getAll() {
		const { data } = await $host.get<IResponseData<ICollection>>("/collections")
		return data
	},

	async getBySlug(slug: string) {
		const { data } = await $host.get<IResponseSingleData<ICollection>>(
			`/collections/${slug}`
		)
		return data
	},
}
