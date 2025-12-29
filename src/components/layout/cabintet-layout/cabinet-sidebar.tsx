"use client"

import { Logo, MySidebarContent } from "@/components/shared"
import { Sidebar, SidebarHeader } from "@/components/ui"
import { studentSidebarConfig } from "./cabinet.config"

type Props = {
	className?: string
}

export const CabinetSidebar = ({ className = `` }: Props) => {
	return (
		<Sidebar>
			<SidebarHeader className="mx-auto p-3 border-b w-full">
				<Logo />
			</SidebarHeader>
			<MySidebarContent sidebarConfig={studentSidebarConfig} />
		</Sidebar>
	)
}
