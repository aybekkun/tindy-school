"use client"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

import { Logo } from "@/components/shared"
import { Container } from "@/components/ui"
import { MobileNav } from "./mobile-menu"
import { NavLinks } from "./nav-links"
import { UserMenu } from "./user-menu"
export const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<header
			className={cn(
				"sticky left-0 right-0 top-0 z-50 transition-all duration-300 border",
				isScrolled
					? "bg-background/65 shadow-sm backdrop-blur-md"
					: "bg-background"
			)}
		>
			<Container className="h-16 flex justify-between items-center relative">
				<Logo className="mr-10" />
				<NavLinks className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex" />
				<MobileNav className="ml-auto" />
				<UserMenu />
			</Container>
		</header>
	)
}
