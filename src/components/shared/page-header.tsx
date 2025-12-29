import { cn } from "@/lib/utils"

type Props = {
	title?: string
	className?: string
	children?: React.ReactNode
}

export const PageHeader = ({
	className = ``,
	children,
	title = "Page title",
}: Props) => {
	return (
		<div className={cn("flex items-center justify-between gap-4", className)}>
			<h2 className="font-semibold text-xl md:text-2xl lg:text-3xl">{title}</h2>
			<div className="flex items-center justify-between">{children}</div>
		</div>
	)
}
