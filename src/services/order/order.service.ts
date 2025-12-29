import { $authHost } from "@/lib/api/axios.instance"
import { IResponseData } from "../service.types"
import type { IOrder } from "./order.types"

export const OrderService = {
	async getMyOrders() {
		const { data } = await $authHost.get<IResponseData<IOrder>>("/orders")
		return data
	},

	async createOrder(courseIds: string[]) {
		const { data } = await $authHost.post<IOrder>("/orders", {
			course_ids: courseIds,
		})
		return data
	},
}
