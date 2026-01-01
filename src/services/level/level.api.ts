import { useQuery } from "@tanstack/react-query"
import { LevelService } from "./level.service"

export const useGetLevels = () => {
	return useQuery({
		queryKey: ["levels"],
		queryFn: () => LevelService.getAll(),
		staleTime: Infinity,
	})
}
