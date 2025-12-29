import { Button, Container } from "@/components/ui"
import { cn } from "@/lib/utils"

interface Props {
	className?: string
}

export const JoinSection = ({ className = `` }: Props) => {
	return (
		<section className={cn("py-16 md:py-24 bg-neutral-100 dark:bg-neutral-900", className)}>
			<Container>
				<div className="text-center">
					<h2 className="mb-4 text-3xl font-semibold text-foreground md:mb-6 md:text-4xl lg:text-5xl">
						Telegram kanalına qosılıń!
					</h2>
					<p className="mb-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
						Kanalımızǵa aǵza bolıń! Eń sońǵı jańalıqlardı alıń, pikirleslerińiz benen pikirlesiń hám eń áhmietli waqıyalardan xabardar bolıń.
					</p>
					<Button className="mx-auto">GO START</Button>
				</div>
			</Container>
		</section>
	)
}

