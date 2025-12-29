"use client"

import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { useDebounce } from "@/hooks/use-debounce"
import { ChevronDown, Search, X } from "lucide-react"
import { useEffect, useState } from "react"

type SelectOption = {
	label: string
	value: string
}

type Props = {
	options: SelectOption[]
	filters: Record<string, any>
	setFilters: (filters: Record<string, any>) => void
	resetFilters?: () => void
	placeholder?: string
	className?: string
}

export const SearchInput = ({
	options,
	filters,
	resetFilters = () => undefined,
	setFilters,
	placeholder = "Izlew...",
	className = "",
}: Props) => {
	const [selectedFiled, setSelectedFiled] = useState(() => {
		return (
			options.find((option) => filters[option.value] !== undefined) ||
			options[0]
		)
	})
	const [searchTerm, setSearchTerm] = useState(
		filters[selectedFiled.value] || ""
	)
	const debouncedSearchTerm = useDebounce(searchTerm, 500)
	useEffect(() => {
		if (debouncedSearchTerm) {
			setFilters({
				[selectedFiled.value]: debouncedSearchTerm,
			})
		}
	}, [debouncedSearchTerm])

	const onChangeFiled = (option: SelectOption) => {
		setSelectedFiled(option)
		onClearSearch()
		resetFilters()
	}
	const onClearSearch = () => {
		setSearchTerm("")
		resetFilters()
	}
	return (
		<div className={`relative w-full max-w-sm ${className}`}>
			<div className="flex">
				{/* Dropdown field selector */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="outline"
							className="rounded-r-none border-r-0 px-3 font-normal min-w-[120px] justify-between"
						>
							{selectedFiled?.label}
							<ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent
						align="start"
						defaultValue={selectedFiled?.value}
					>
						{options.map((option) => (
							<DropdownMenuItem
								key={option.value}
								onSelect={() => onChangeFiled(option)}
								className="cursor-pointer"
							>
								{option.label}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>

				{/* Search input */}
				<div className="relative w-full">
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
					<Input
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder={placeholder}
						className="rounded-l-none pl-9 pr-8 bg-card"
					/>

					{searchTerm && (
						<Button
							variant="ghost"
							size="icon"
							onClick={onClearSearch}
							className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
						>
							<X className="h-4 w-4" />
						</Button>
					)}
				</div>
			</div>
		</div>
	)
}
