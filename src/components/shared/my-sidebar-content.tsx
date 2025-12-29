"use client"
import Link from "next/link"
import {
	Badge,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "../ui"
import { usePathname } from "next/navigation"
import { match } from "path-to-regexp"
import { ScrollArea } from "../ui/scroll-area"
export type SidebarConfig = {
	title?: string
	items: {
		href: string
		title: string
		description?: string
		icon: React.ComponentType<{ className?: string }>
		badge?: string
	}[]
}

type Props = {
	className?: string
	sidebarConfig: SidebarConfig[]
}

export const MySidebarContent = ({ className = ``, sidebarConfig }: Props) => {
	const pathname = usePathname()
	return (
		<SidebarContent className={className}>
			<ScrollArea className="h-full">
				{sidebarConfig.map((section, index) => (
					<SidebarGroup key={index}>
						{section.title && (
							<SidebarGroupLabel>{section.title}</SidebarGroupLabel>
						)}
						<SidebarGroupContent>
							<SidebarMenu>
								{section.items.map((item) => {
									const isActive = !!match(item.href)(pathname)
									const Icon = item.icon

									return (
										<SidebarMenuItem key={item.href}>
											<SidebarMenuButton
												asChild
												isActive={isActive}
												tooltip={item.description}
											>
												<Link
													href={item.href}
													className="flex items-center gap-3"
												>
													<Icon className="w-4 h-4" />
													<span className="flex-1">{item.title}</span>
													{item.badge && (
														<Badge
															variant="secondary"
															className="ml-auto h-5 px-2 text-xs"
														>
															{item.badge}
														</Badge>
													)}
												</Link>
											</SidebarMenuButton>
										</SidebarMenuItem>
									)
								})}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</ScrollArea>
		</SidebarContent>
	)
}
