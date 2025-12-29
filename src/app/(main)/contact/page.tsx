"use client"

import { Container } from "@/components/ui"
import { cn } from "@/lib/utils"
import {
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Send,
	Youtube,
	type LucideIcon,
} from "lucide-react"
import type React from "react"

const APP_EMAIL = "info@onlineschool.uz"
const APP_PHONE = "+998 99 123 45 67"
const APP_ADDRESS = "Nókis qalası, Karakalpakstan Respublikası, Ózbеkstan"

export default function ContactPage() {
	const socialLinks = [
		{
			icon: Youtube,
			href: "https://youtube.com",
			label: "Youtube",
		},
		{
			icon: Instagram,
			href: "https://instagram.com",
			label: "Instagram",
		},
		{
			icon: Send,
			href: "https://telegram.org",
			label: "Telegram",
		},
	]

	return (
		<>
			{/* Hero Section - Restored from original */}
			<section className="relative overflow-hidden py-16 md:py-24">
				<Container className="relative z-10">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="border-primary/20 bg-primary/10 text-primary mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold">
							Biz benen baylanısıń
						</div>
						<h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
							Kontakt <span className="text-primary">maǵluwmatlar</span>
						</h1>
						<p className="text-muted-foreground text-lg md:text-xl">
							Bizge sorawlarıńız bar ma? Biz hárdayım járdem beriwge tayarmız.
						</p>
					</div>

					{/* Contact Info Cards - New Style */}
					<div className="relative mb-16">
						<div className="absolute inset-x-0 h-px w-full border-b" />
						<div className="grid md:grid-cols-3">
							<Box
								description="Biz barlıq xatlarınıńızǵa 24 saat ishinde juwap beriwge háreket etemiz."
								icon={Mail}
								title="Email"
							>
								<a
									className="font-medium font-mono text-sm tracking-wide hover:underline"
									href={`mailto:${APP_EMAIL}`}
								>
									{APP_EMAIL}
								</a>
							</Box>
							<Box
								description="Sorawlarıńız benen ofisimizge kelseńiz de boladı."
								icon={MapPin}
								title="Ofis"
							>
								<span className="font-medium font-mono text-sm tracking-wide">
									{APP_ADDRESS}
								</span>
							</Box>
							<Box
								className="border-b-0 md:border-r-0"
								description="Dúyshembi-Juma, 9:00 - 18:00 aralıǵında qollap-quwatlaymız."
								icon={Phone}
								title="Telefon"
							>
								<div>
									<a
										className="block font-medium font-mono text-sm tracking-wide hover:underline"
										href={`tel:${APP_PHONE}`}
									>
										{APP_PHONE}
									</a>
								</div>
							</Box>
						</div>
						<div className="absolute inset-x-0 h-px w-full border-b" />
					</div>

					{/* Social Media Section - New Style */}
					<div className="z-1 flex h-full flex-col items-center justify-center gap-4 py-12 mb-16">
						<h2 className="text-center font-medium text-2xl md:text-3xl">
							Bizdi <span className="text-green-400">onlayn</span> tabıń
						</h2>
						<div className="flex flex-wrap items-center justify-center gap-2">
							{socialLinks.map((link) => (
								<a
									className="flex items-center gap-x-2 rounded-full border bg-card px-3 py-1.5 shadow hover:bg-accent transition-colors"
									href={link.href}
									key={link.label}
									rel="noopener noreferrer"
									target="_blank"
								>
									<link.icon className="size-3.5 text-muted-foreground" />
									<span className="font-medium font-mono text-xs tracking-wide">
										{link.label}
									</span>
								</a>
							))}
						</div>
					</div>

					{/* Google Maps - Restored from original */}
					<div className="rounded-xl overflow-hidden border shadow-lg">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47977.34355572629!2d59.58743842167969!3d42.46055387910156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9471e2d1e839%3A0x3e8f6e8e51b9c9e8!2sNukus%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
							width="100%"
							height="450"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="w-full"
						/>
					</div>
				</Container>
			</section>
		</>
	)
}

type ContactBox = React.ComponentProps<"div"> & {
	icon: LucideIcon
	title: string
	description: string
}

function Box({
	title,
	description,
	className,
	children,
	...props
}: ContactBox) {
	return (
		<div
			className={cn(
				"flex flex-col justify-between border-b md:border-r md:border-b-0",
				className
			)}
		>
			<div className="flex items-center gap-x-3 border-b bg-secondary/30 p-4">
				<props.icon
					className="size-5 text-muted-foreground"
					strokeWidth={1.5}
				/>
				<h2 className="font-medium text-lg tracking-wider">{title}</h2>
			</div>
			<div className="flex items-center gap-x-2 p-4 py-12 grow">{children}</div>
			<div className="border-t p-4 bg-muted/5">
				<p className="text-muted-foreground text-sm leading-relaxed">
					{description}
				</p>
			</div>
		</div>
	)
}
