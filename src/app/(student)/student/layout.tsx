"use client"

import { CabinetSidebar } from "@/components/layout/cabintet-layout/cabinet-sidebar"
import { UserMenu } from "@/components/layout/main-layout/user-menu"
import { SidebarTrigger } from "@/components/ui"
import { AuthGuard } from "@/providers"

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<CabinetSidebar />
			<main className="flex-1">
				<header className="flex items-center justify-between gap-2 py-2 px-4 border-b">
					<SidebarTrigger />
					<UserMenu className="flex" />
				</header>
				<div className="p-4">
					<AuthGuard
						title="Student kabinetine kiriw"
						description="Student kabinetine kiriw ushın dáslep akkauntıńızǵa kiriwińiz kerek."
					>
						{children}
					</AuthGuard>
				</div>
			</main>
		</>
	)
}
export default Layout
