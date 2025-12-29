import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	Button,
	DropdownMenuSeparator,
} from "@/components/ui"
import { cn } from "@/lib/utils"
import { Ellipsis, GripVertical, Loader2 } from "lucide-react"

type Props = {
	className?: string
	loading?: boolean
	options: {
		label: string
		variant?: "default" | "destructive"
		disabled?: boolean
		onClick: () => void
		icon?: React.ComponentType<{ className?: string }>
	}[]
}

export const ActionsMenu = ({ className = ``, loading, options }: Props) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					disabled={loading}
					className={cn(
						"data-[state=open]:bg-muted text-muted-foreground flex size-8",
						className
					)}
					size="icon"
				>
					{loading ? <Loader2 className="animate-spin" /> : <Ellipsis />}
					<span className="sr-only">Open menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-32">
				{options.map((option) => (
					<DropdownMenuItem
						disabled={option.disabled}
						className="cursor-pointer"
						variant={option.variant}
						key={option.label}
						onClick={option.onClick}
					>
						{option.icon && <option.icon className="mr-2 h-4 w-4" />}
						{option.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
