"use client"
import {
	Button,
	Checkbox,
	Label,
	RadioGroup,
	RadioGroupItem,
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui"
import { useCourseFilters } from "./use-course-filter"
import { Filter, X } from "lucide-react"

export const CourseFilter = () => {
	const {
		filters,
		setRadioValue,
		toggleCheckboxValue,
		resetFilters,
		getSelectedValues,
		courseFilters,
	} = useCourseFilters()

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">
					<Filter className="mr-2" size={16} /> Filtr
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="w-[300px]  sm:w-[400px]">
				<SheetHeader>
					<SheetTitle>Filtr</SheetTitle>
					<SheetDescription>Filtr saylań</SheetDescription>
				</SheetHeader>
				<div className="py-4">
					<Button
						variant={"link"}
						onClick={resetFilters}
						className="px-0 text-destructive mx-auto w-full"
					>
						<X className="mr-2" size={16} />
						TAZALAW
					</Button>
				</div>
				<div className="space-y-6 p-4">
					{courseFilters.map((filter) => (
						<div key={filter.value} className="space-y-3">
							<h3 className="font-medium text-foreground text-sm">
								{filter.title}
							</h3>
							{filter.variant === "radio" ? (
								<RadioGroup
									value={filters[filter.value] || ""}
									onValueChange={(value) => setRadioValue(filter.value, value)}
								>
									{filter.options.map((option) => (
										<div
											key={option.value}
											className="flex items-center space-x-2"
										>
											<RadioGroupItem
												value={option.value}
												id={`${filter.value}-${option.value}`}
											/>
											<Label
												htmlFor={`${filter.value}-${option.value}`}
												className="cursor-pointer"
											>
												{option.label}
											</Label>
										</div>
									))}
								</RadioGroup>
							) : (
								<div className="space-y-2">
									{filter.options.map((option) => {
										const selectedValues = getSelectedValues(filter.value)
										const isChecked = selectedValues.includes(option.value)
										return (
											<div
												key={option.value}
												className="flex items-center space-x-2"
											>
												<Checkbox
													id={`${filter.value}-${option.value}`}
													checked={isChecked}
													onCheckedChange={() =>
														toggleCheckboxValue(filter.value, option.value)
													}
												/>
												<Label
													htmlFor={`${filter.value}-${option.value}`}
													className="cursor-pointer"
												>
													{option.label}
												</Label>
											</div>
										)
									})}
								</div>
							)}
						</div>
					))}
				</div>
			</SheetContent>
		</Sheet>
	)
}
