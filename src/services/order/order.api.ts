import { useMutation, useQuery } from "@tanstack/react-query"
import { OrderService } from "./order.service"

export const useGetMyOrders = () => {
	return useQuery({
		queryKey: ["my-orders"],
		queryFn: OrderService.getMyOrders,
	})
}

export const useCreateOrder = () => {
	return useMutation({
		mutationFn: OrderService.createOrder,
	})
}
