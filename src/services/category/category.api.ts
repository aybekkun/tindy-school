import { useQuery } from "@tanstack/react-query"
import { CategoryService } from "./category.service"

export const useGetCategories = () => {
	return useQuery({
		queryKey: ["categories"],
		queryFn: () => CategoryService.getAll(),
	})
}
