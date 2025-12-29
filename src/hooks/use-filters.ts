import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

const DEFAULT_PAGE = "1"
const DEFAULT_LIMIT = "10"

export function useFilters<T extends Record<string, any>>() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	// Получаем текущие фильтры из URL
	const filters = Object.fromEntries(searchParams.entries()) as T

	// Функция для обновления фильтров
	const setFilters = useCallback(
		(partialFilters: Partial<T>) => {
			const current = new URLSearchParams(Array.from(searchParams.entries()))

			// Объединяем текущие параметры с новыми
			const updated = {
				...Object.fromEntries(current.entries()),
				...partialFilters,
			}

			// Очищаем пустые параметры
			const cleaned = cleanEmptyParams(updated)

			// Создаем новый URL с обновленными параметрами
			const newParams = new URLSearchParams(Object.entries(cleaned).map(([key, value]) => [key, String(value)]))

			router.push(`${pathname}?${newParams.toString()}`, { scroll: false })
		},
		[searchParams, pathname, router]
	)

	// Функция для сброса фильтров
	const resetFilters = useCallback(() => {
		const newParams = new URLSearchParams({
			page: DEFAULT_PAGE,
			limit: DEFAULT_LIMIT,
		})
		router.push(`${pathname}?${newParams.toString()}`, { scroll: false })
	}, [pathname, router])

	return { filters, setFilters, resetFilters }
}

// Вспомогательная функция для очистки пустых параметров
export const cleanEmptyParams = <T extends Record<string, unknown>>(search: T): Record<string, unknown> => {
	const newSearch = { ...search }

	Object.keys(newSearch).forEach((key) => {
		const value = newSearch[key]
		if (value === undefined || value === "" || value === null || (typeof value === "number" && isNaN(value))) {
			delete newSearch[key]
		}
	})

	// Удаляем дефолтные значения пагинации
	if (newSearch.page === 1 || newSearch.page === "1") {
		delete newSearch.page
	}
	if (newSearch.limit === 10 || newSearch.limit === "10") {
		delete newSearch.limit
	}

	// Поддержка альтернативных названий для пагинации
	if (newSearch.pageIndex === 1 || newSearch.pageIndex === "1") {
		delete newSearch.pageIndex
	}
	if (newSearch.pageSize === 10 || newSearch.pageSize === "10") {
		delete newSearch.pageSize
	}

	return newSearch
}
