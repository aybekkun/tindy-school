
import { Card, Container } from "@/components/ui"
import { AreaChart, BookOpen, File } from "lucide-react"

export const FeaturesSection = () => {
	const features = [
		{
			icon: <BookOpen className="size-6 text-blue-600" />,
			title: "Kurslardıń hár qıylılıǵı",
			description:
				"Platformada programmalastırıw hám basqa da temalar boyınsha kurslar bar. Barlıq sabaqlardı qálegen waqıtta alıwıń múmkin, sonıń ushın qolaylı ritmde oqıwıń múmkin.",
		},
		{
			icon: <AreaChart className="size-6 text-blue-600" />,
			title: "Progressti baqlaw",
			description:
				"Óz jetiskenliklerińizdi baqlap barıń, tapsırmalardı orınlań hám ballar alıń. Siz ózińizdiń ósiwińizdi kóriwińiz ushın barlıq statistika profilde saqlanadı.",
		},
		{
			icon: <File className="size-6 text-blue-600" />,
			title: "Barlıq kurs materialları",
			description:
				"Sabaqlarga óz betinshe shuģillanıw ushin materiallar usınıladı.",
		},
	]

	return (
		<section className="py-16 md:py-24 bg-neutral-100 dark:bg-neutral-900">
			<Container className="mx-auto max-w-7xl px-4 antialiased">
				<div className="mx-auto w-full">
					<h2 className="mb-4 text-center text-3xl font-semibold text-foreground md:mb-6 md:text-4xl lg:text-5xl">
						Platformada sizdi ne kútpekte?
					</h2>
					<p className="mx-auto mb-6 max-w-2xl text-center text-base text-muted-foreground md:mb-8 md:text-lg">
						Qolaylı kurslardan paydalanıń, óz rawajlanıwıńızdı baqlap barıń
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
					{features.map((reason, index) => (
						<Card key={index} className="rounded-lg border border-none text-card-foreground shadow-sm">
							<div className="space-y-4 p-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/10">
									{reason.icon}
								</div>
								<h3 className="text-xl font-semibold">{reason.title}</h3>
								<p className="text-base text-muted-foreground">{reason.description}</p>
							</div>
						</Card>
					))}
				</div>
			</Container>
		</section>
	)
}
