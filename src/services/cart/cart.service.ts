import { $authHost } from "@/lib/api/axios.instance"
import type { ICart } from "./cart.types"

export const CartService = {
	async getMyCart() {
		const { data } = await $authHost.get<ICart[]>("/carts")
		return data
	},

	async addToCart(courseId: string) {
		const formData = new FormData()
		formData.append("course_id", courseId)
		const { data } = await $authHost.post<ICart>("/carts", formData)
		return data
	},
}
