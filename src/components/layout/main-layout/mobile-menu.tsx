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
import { useRouter } from "next/navigation"
import { useState } from "react"
import { navLinks } from "./nav-links"

type Props = {
	className?: string
}

export function MobileNav({ className }: Props) {
	const { isAuth, logout } = useAuthStore()
	const [isOpen, setIsOpen] = useState(false)
	const router = useRouter()

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
							onClick={() => {
								router.push(link.href)
								setIsOpen(false)
							}}
							variant="ghost"
							size="sm"
							className="justify-start"
						>
							{link.title}
						</Button>
					))}
					<Separator className="my-1" />
					{isAuth ? (
						<>
							<Button variant="ghost" size="sm" className="justify-start">
								<Book />
								Meniń kurslarım
							</Button>
							<Button
								onClick={() => {
									router.push(ROUTES.PROFILE.ROOT)
									setIsOpen(false)
								}}
								variant="ghost"
								size="sm"
								className="justify-start"
							>
								<ChartArea />
								Progress
							</Button>
							<Button
								onClick={() => {
									router.push(ROUTES.MY_ORDERS)
									setIsOpen(false)
								}}
								variant="ghost"
								size="sm"
								className="justify-start"
							>
								<ShoppingBag />
								Meniń buyırtpalarım
							</Button>
							<Button
								onClick={() => {
									router.push(ROUTES.CART)
									setIsOpen(false)
								}}
								variant="ghost"
								size="sm"
								className="justify-start"
							>
								<ShoppingCart />
								Korzina
							</Button>
							<Button
								onClick={() => {
									router.push(ROUTES.PROFILE.SETTINGS)
									setIsOpen(false)
								}}
								variant="ghost"
								size="sm"
								className="justify-start"
							>
								<Settings />
								Sazlamlar
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
							<Button
								onClick={() => {
									router.push(ROUTES.AUTH.LOGIN())
									setIsOpen(false)
								}}
								variant="outline"
								size="sm"
							>
								Kiriw
							</Button>
							<Button
								onClick={() => {
									router.push(ROUTES.AUTH.REGISTER())
									setIsOpen(false)
								}}
								size="sm"
							>
								Registratsiya
							</Button>
						</>
					)}
				</div>
			</SheetContent>
		</Sheet>
	)
}
