"use client"
import { cn } from "@/lib/utils"
import { Filter } from "lucide-react"
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui"

type Props = {
	className?: string
	title?: string
	options: {
		label: string
		value: string
		icon?: React.ComponentType<{ className?: string }>
	}[]
	selectedValue?: string
	onSelect: (value: string) => void
}

export const FilterItem = ({
	className = ``,
	onSelect,
	title = "Filter",
	options,
	selectedValue,
}: Props) => {
	const selectedOption = options.find(
		(option) => option.value === selectedValue
	)

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="sm"
					className={cn("h-8 border-dashed", className)}
				>
					<Filter
						className={cn("mr-2 h-4 w-4")}
						fill={selectedOption ? "bg-primary" : "none"}
					/>
					{title}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-[150px] max-h-[400px] p-0"
				align="start"
			>
				<DropdownMenuRadioGroup
					value={selectedValue ? selectedValue.toString() : ""}
					onValueChange={onSelect}
				>
					{options.map((option) => {
						const isSelected = option.value === selectedValue
						return (
							<DropdownMenuRadioItem
								key={option.value.toString()}
								value={option.value.toString()}
								onSelect={() => {
									if (isSelected) {
										onSelect("")
									} else {
										onSelect(option.value)
									}
								}}
								className="capitalize cursor-pointer"
							>
								{option.icon && <option.icon className="mr-2 h-4 w-4" />}
								{option.label}
							</DropdownMenuRadioItem>
						)
					})}
				</DropdownMenuRadioGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="p-0 flex justify-end">
					<Button
						onClick={() => onSelect("")}
						size="sm"
						className="text-xs w-full"
						variant="outline"
					>
						TAZALAW
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
