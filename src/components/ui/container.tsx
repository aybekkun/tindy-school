import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type Props = {
	className?: string
	children?: ReactNode
}

export const Container = ({ children, className }: Props) => {
	return <div className={cn("container mx-auto px-2", className)}>{children}</div>
}
