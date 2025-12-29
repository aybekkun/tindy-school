import { Card } from "@/components/ui"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import { type FC } from "react"

interface Props {
	className?: string
	icon?: LucideIcon
	name: string
	count: number | string
}

export const DashboardCard: FC<Props> = ({
	className = ``,
	icon: Icon,
	name,
	count,
}) => {
	return (
		<Card className={cn("p-4 text-white shadow-none", className)}>
			<div className="mb-2">
				<div className="flex items-center gap-1 mb-1">
					<p className="text-sm md:text-base lg:text-lg font-medium">{name}</p>
					{Icon && <Icon className="w-5 h-5 opacity-80" />}
				</div>
				<p className="text-xl md:text-3xl lg:text-4xl font-bold">
					{count.toLocaleString()}
				</p>
			</div>
			<MiniBarChart />
		</Card>
	)
}

function MiniBarChart() {
	return (
		<div className="w-full mt-auto flex items-end">
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 300 60"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="0" y="24" width="6" height="36" fill="rgba(255,255,255,0.5)" />
				<rect
					x="10"
					y="16"
					width="6"
					height="44"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="20"
					y="30"
					width="6"
					height="30"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="30"
					y="20"
					width="6"
					height="40"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="40"
					y="10"
					width="6"
					height="50"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="50"
					y="36"
					width="6"
					height="24"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="60"
					y="14"
					width="6"
					height="46"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="70"
					y="28"
					width="6"
					height="32"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="80"
					y="22"
					width="6"
					height="38"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="90"
					y="18"
					width="6"
					height="42"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="100"
					y="34"
					width="6"
					height="26"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="110"
					y="12"
					width="6"
					height="48"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="120"
					y="26"
					width="6"
					height="34"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="130"
					y="20"
					width="6"
					height="40"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="140"
					y="16"
					width="6"
					height="44"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="150"
					y="32"
					width="6"
					height="28"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="160"
					y="14"
					width="6"
					height="46"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="170"
					y="10"
					width="6"
					height="50"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="180"
					y="22"
					width="6"
					height="38"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="190"
					y="18"
					width="6"
					height="42"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="200"
					y="28"
					width="6"
					height="32"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="210"
					y="24"
					width="6"
					height="36"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="220"
					y="12"
					width="6"
					height="48"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="230"
					y="26"
					width="6"
					height="34"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="240"
					y="14"
					width="6"
					height="46"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="250"
					y="30"
					width="6"
					height="30"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="260"
					y="20"
					width="6"
					height="40"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="270"
					y="10"
					width="6"
					height="50"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="280"
					y="22"
					width="6"
					height="38"
					fill="rgba(255,255,255,0.5)"
				/>
				<rect
					x="290"
					y="16"
					width="6"
					height="44"
					fill="rgba(255,255,255,0.5)"
				/>
			</svg>
		</div>
	)
}
