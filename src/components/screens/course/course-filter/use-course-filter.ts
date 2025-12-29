"use client"

import { useFilters } from "@/hooks/use-filters"
import { useGetCategories } from "@/services/category/category.api"
import { useGetLevels } from "@/services/level/level.api"

export type CourseFilters = Record<string, string>
export function useCourseFilters() {
	const { filters, setFilters, resetFilters } = useFilters<CourseFilters>()
	const { data: categories } = useGetCategories()
	const { data: levels } = useGetLevels()
	/** Получить массив значений checkbox */
	const getSelectedValues = (key: string) => filters[key]?.split(",") ?? []
	const courseFilters = [
		{
			title: "Kategoriyalar",
			value: "category",
			variant: "checkbox",
			options:
				categories?.data.map((c) => ({
					label: c.name,
					value: c.id.toString(),
				})) || [],
		},
		{
			title: "Därejeler",
			value: "level",
			variant: "radio",
			options:
				levels?.data.map((l) => ({ label: l.name, value: l.id.toString() })) ||
				[],
		},
		{
			title: "Tölemli/Biypul",
			value: "is_free",
			variant: "radio",
			options: [
				{ label: "Biypul", value: "true" },
				{ label: "Tolemli", value: "false" },
			],
		},
	]
	/** Включить/выключить checkbox */
	const toggleCheckboxValue = (key: string, value: string) => {
		const current = getSelectedValues(key)
		const updated = current.includes(value)
			? current.filter((v) => v !== value)
			: [...current, value]

		setFilters({
			page: "1",
			[key]: updated.length ? updated.join(",") : undefined,
		})
	}

	/** Установить radio */
	const setRadioValue = (key: string, value: string) => {
		setFilters({
			page: "1",
			[key]: value,
		})
	}

	/** Сформировать активные бейджы */
	const getActiveBadges = () => {
		return courseFilters.flatMap((filter) => {
			const value = filters[filter.value]
			if (!value) return []

			if (filter.variant === "radio") {
				const option = filter.options.find((o) => o.value === value)
				return option
					? [{ filterKey: filter.value, value, label: option.label }]
					: []
			}

			if (filter.variant === "checkbox") {
				return getSelectedValues(filter.value)
					.map((v) => {
						const option = filter.options.find((o) => o.value === v)
						return option
							? { filterKey: filter.value, value: v, label: option.label }
							: null
					})
					.filter(Boolean) as any[]
			}

			return []
		})
	}

	/** Удалить фильтр (radio или checkbox элемент) */
	const removeFilter = (filterKey: string, value: string) => {
		const filter = courseFilters.find((f) => f.value === filterKey)
		if (!filter) return

		if (filter.variant === "radio") {
			setFilters({ page: "1", [filterKey]: undefined })
		} else {
			toggleCheckboxValue(filterKey, value)
		}
	}

	return {
		filters,
		setFilters,
		resetFilters,
		getSelectedValues,
		toggleCheckboxValue,
		setRadioValue,
		getActiveBadges,
		removeFilter,
		courseFilters,
	}
}
