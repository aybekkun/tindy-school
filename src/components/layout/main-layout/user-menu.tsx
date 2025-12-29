"use client"

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	Skeleton,
} from "@/components/ui"
import { ROUTES } from "@/constants"
import { cn } from "@/lib/utils"
import { useAuthStore } from "@/store"
import {
	Book,
	ChartArea,
	LogOut,
	Settings,
	ShoppingBag,
	ShoppingCart,
} from "lucide-react"
import Link from "next/link"

type Props = {
	className?: string
}

export function UserMenu({ className }: Props) {
	const { status, user, logout } = useAuthStore()

	if (status === "loading") {
		return (
			<div className={cn("hidden md:flex items-center gap-5 ", className)}>
				<Skeleton className="size-10 rounded-full" />
			</div>
		)
	}

	if (!user) {
		return (
			<div className={cn("hidden md:flex items-center gap-5 ", className)}>
				<Button variant="outline" size="sm" asChild>
					<Link href={ROUTES.AUTH.LOGIN()}>Kiriw</Link>
				</Button>
				<Button size="sm" asChild>
					<Link href={ROUTES.AUTH.REGISTER()}>Dizimnen ótiw</Link>
				</Button>
			</div>
		)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					className={cn(
						"hidden md:flex relative size-10 rounded-full",
						className
					)}
				>
					<Avatar>
						<AvatarImage alt="Avatar" src={user?.avatar || ""} />
						<AvatarFallback>{user?.first_name.slice(0, 1)}</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end">
				<DropdownMenuLabel className="font-normal">
					<div className="flex flex-col space-y-1">
						<p className="text-sm font-medium leading-none">
							{user?.full_name}
						</p>
						<p className="text-xs leading-none text-muted-foreground">
							{user?.phone}
						</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						<Link href={ROUTES.PROFILE.ROOT}>
							<Book />
							Meniń kurslarım
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href={ROUTES.PROFILE.ROOT}>
							<ChartArea />
							Progress
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href={ROUTES.MY_ORDERS}>
							<ShoppingBag />
							Meniń buyırtpalarım
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href={ROUTES.CART}>
							<ShoppingCart />
							Sebet
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href={ROUTES.PROFILE.SETTINGS}>
							<Settings />
							Sazlawlar
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem onClick={logout} className="text-rose-600">
						<LogOut />
						Shıǵıw
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
