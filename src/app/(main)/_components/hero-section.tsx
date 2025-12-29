import { Button, Container } from "@/components/ui"
import { ROUTES } from "@/constants"
import { ArrowRight, Clock, GraduationCap, ShieldCheck } from "lucide-react"
import Link from "next/link"

export const HeroSection = () => {
	return (
		<div className="relative overflow-hidden">
			{/* Gradient background with mesh */}
			<div className="from-primary/20 via-background to-background absolute inset-0 z-0 bg-linear-to-br">
				<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-size-[16px_16px] dark:bg-[radial-gradient(#333_1px,transparent_1px)]"></div>
			</div>

			<Container className="relative px-4 py-24 md:px-6 md:py-36">
				<div className="mx-auto flex max-w-4xl flex-col items-center space-y-10 text-center">
					<div className="space-y-6">
						<div className="bg-primary/10 text-primary inline-block rounded-full px-3 py-1 text-sm font-medium">
							Eń sońǵı innovaciya
						</div>
						<h1 className="from-primary to-primary/50 dark:from-primary dark:to-primary/70 bg-linear-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent leading-normal sm:text-5xl md:text-6xl lg:text-7xl">
							Digital tájiriybeńdi ózgert!
						</h1>
						<p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl lg:text-2xl">
							Oqıw procesińizdi joqarı dárejege kóteriw hám rawajlandırıw ushın jaratılǵan eń aldınǵı funkciyalardı óz ishine alǵan kúshli platformamız benen tanısıń.
						</p>
					</div>

					<div className="mx-auto flex w-full max-w-md flex-col gap-4 sm:flex-row">
						<Button size="lg" className="w-full" asChild>
							<Link href={ROUTES.COURSES.ROOT}>
								Baslaw
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className="flex items-center justify-center flex-wrap gap-8 pt-4">
						<div className="flex items-center gap-2">
							<GraduationCap className="text-primary" />
							<span className="dark:text-gray-200">Zamanagóy oqiw materialları</span>
						</div>


						<div className="flex items-center gap-2">
							<Clock className="text-primary" />
							<span className="dark:text-gray-200">Qolaylı tezlikte hám qálegen waqıtta úyreniń</span>
						</div>

						<div className="flex items-center gap-2">
							<ShieldCheck className="text-primary" />
							<span className="dark:text-gray-200">Isenimli hám qáwipsiz bilimlendiriw ortalıǵı</span>
						</div>
					</div>
				</div>
			</Container>

			{/* Abstract shapes */}
			<div className="bg-primary/10 absolute top-1/4 -left-20 h-64 w-64 rounded-full blur-3xl"></div>
			<div className="bg-primary/10 absolute -right-20 bottom-1/4 h-64 w-64 rounded-full blur-3xl"></div>
		</div>
	)
}
