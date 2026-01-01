import { ROUTES } from "@/constants"

import {
	Button,
	Separator,
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui"
import { cn } from "@/lib/utils"
import { useAuthStore } from "@/store"
import {
	Book,
	ChartArea,
	LogOut,
	Menu,
	Settings,
	ShoppingBag,
	ShoppingCart,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { navLinks } from "./nav-links"

type Props = {
	className?: string
}

export function MobileNav({ className }: Props) {
	const { isAuth, logout } = useAuthStore()
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger className="md:hidden" asChild>
				<Button
					variant="ghost"
					size="icon"
					className={cn("size-10 rounded-full [&_svg]:size-5", className)}
				>
					<Menu />
					<span className="sr-only">Открыть меню</span>
				</Button>
			</SheetTrigger>
			<SheetContent className="flex flex-col gap-4 p-4">
				<div className="flex flex-col gap-2">
					<SheetTitle>Tindy</SheetTitle>
					<SheetDescription className="text-pretty text-[13px]">
						Multi tálim platforması.
					</SheetDescription>
				</div>
				<div className="flex flex-col gap-2">
					{navLinks.map((link, index) => (
						<Button
							key={index}
							variant="ghost"
							size="sm"
							className="justify-start"
							asChild
						>
							<Link href={link.href} onClick={() => setIsOpen(false)}>
								{link.title}
							</Link>
						</Button>
					))}
					<Separator className="my-1" />
					{isAuth ? (
						<>
							<Button
								variant="ghost"
								size="sm"
								className="justify-start"
								asChild
							>
								<Link
									href={ROUTES.PROFILE.MY_COURSES}
									onClick={() => setIsOpen(false)}
								>
									<Book />
									Meniń kurslarım
								</Link>
							</Button>
							<Button
								variant="ghost"
								size="sm"
								className="justify-start"
								asChild
							>
								<Link
									href={ROUTES.PROFILE.ROOT}
									onClick={() => setIsOpen(false)}
								>
									<ChartArea />
									Progress
								</Link>
							</Button>
							<Button
								variant="ghost"
								size="sm"
								className="justify-start"
								asChild
							>
								<Link href={ROUTES.MY_ORDERS} onClick={() => setIsOpen(false)}>
									<ShoppingBag />
									Meniń buyırtpalarım
								</Link>
							</Button>
							<Button
								variant="ghost"
								size="sm"
								className="justify-start"
								asChild
							>
								<Link href={ROUTES.CART} onClick={() => setIsOpen(false)}>
									<ShoppingCart />
									Korzina
								</Link>
							</Button>
							<Button
								variant="ghost"
								size="sm"
								className="justify-start"
								asChild
							>
								<Link
									href={ROUTES.PROFILE.SETTINGS}
									onClick={() => setIsOpen(false)}
								>
									<Settings />
									Sazlamlar
								</Link>
							</Button>
							<Button
								onClick={logout}
								variant="ghost"
								size="sm"
								className="justify-start text-red-500!"
							>
								<LogOut />
								Shıǵıw
							</Button>
						</>
					) : (
						<>
							<Button variant="outline" size="sm" asChild>
								<Link
									href={ROUTES.AUTH.LOGIN()}
									onClick={() => setIsOpen(false)}
								>
									Kiriw
								</Link>
							</Button>
							<Button size="sm" asChild>
								<Link
									href={ROUTES.AUTH.REGISTER()}
									onClick={() => setIsOpen(false)}
								>
									Registratsiya
								</Link>
							</Button>
						</>
					)}
				</div>
			</SheetContent>
		</Sheet>
	)
}
