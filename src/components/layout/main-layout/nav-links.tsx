
import { ROUTES } from "@/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"

export const navLinks = [
	{ title: "Kurslar", href: ROUTES.COURSES.ROOT },
	{ title: "Kontakt", href: "/contact" },
	{ title: "Biz haqimizda", href: "/about" },
]

type Props = {
	className?: string
}

export const NavLinks = ({ className }: Props) => {
	return (
		<nav className={cn("hidden items-center space-x-7 text-sm font-medium md:flex", className)}>

			{navLinks.map((link) => (
				<Link
					key={link.title}
					href={link.href}
					className="text-sm text-neutral-600 transition hover:text-foreground dark:text-neutral-300 dark:hover:text-white"
				>
					{link.title}
				</Link>
			))}
		</nav>
	)
}
