import { toast } from "sonner"
import { ResponseError } from "./api.types"

export const errorCatch = (error: ResponseError) => {
	return toast.error("Ошибка", {
		description: JSON.stringify(error.response?.data.errors),
	})
}
