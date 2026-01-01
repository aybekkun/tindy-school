"use client"

import {
	Button,
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui"
import { ROUTES } from "@/constants"
import { useAuthStore } from "@/store"
import { Lock } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

interface AuthGuardProps {
	children: ReactNode
	title?: string
	description?: string
}

export const AuthGuard = ({
	children,
	title = "Kiriw kerek",
	description = "Bul betti kóre alıw ushın dizimnen ótiwińiz yamasa akkauntıńızǵa kiriwińiz kerek.",
}: AuthGuardProps) => {
	const { isAuth, status } = useAuthStore()
	const pathname = usePathname()

	if (status === "loading") {
		return (
			<div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
				<div className="size-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
				<p className="text-muted-foreground animate-pulse">Júklenbekte...</p>
			</div>
		)
	}

	if (!isAuth) {
		return (
			<div className="flex flex-col items-center justify-center min-h-[70vh] p-4 text-center">
				<Card className="max-w-md w-full border-2 border-dashed border-muted-foreground/20 bg-muted/30">
					<CardHeader className="space-y-4">
						<div className="mx-auto size-16 bg-primary/10 rounded-full flex items-center justify-center">
							<Lock className="size-8 text-primary" />
						</div>
						<div className="space-y-2">
							<CardTitle className="text-2xl font-bold">{title}</CardTitle>
							<CardDescription className="text-base">
								{description}
							</CardDescription>
						</div>
					</CardHeader>
					<CardFooter className="flex flex-col sm:flex-row gap-3 pt-2">
						<Button className="w-full" variant="default" asChild>
							<Link href={ROUTES.AUTH.LOGIN(pathname)}>Kiriw</Link>
						</Button>
						<Button className="w-full" variant="outline" asChild>
							<Link href={ROUTES.AUTH.REGISTER(pathname)}>Dizimnen ótiw</Link>
						</Button>
					</CardFooter>
				</Card>
			</div>
		)
	}

	return <>{children}</>
}
