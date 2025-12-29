import { useIsAllowedQuery } from "@/services/course"

export const useIsAllowed = (slug: string) => {
	const { data, isError, isLoading } = useIsAllowedQuery(slug)

	if (isLoading) return false
	if (isError) return false
	return data?.allowed
}
