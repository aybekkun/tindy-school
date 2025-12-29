import { Instagram, MousePointer2, Youtube } from "lucide-react"
import Link from "next/link"
import { Container } from "@/components/ui"

const footerSections = [
	{
		title: "Siltemeler",
		links: [
			{ label: "Kontakt", href: "/contact" },
			{ label: "FAQ", href: "/faq" },
		],
	},
	{
		title: "Kollektsiyalar",
		links: [
			{ label: "Frontend", href: "/new-arrivals" },
			{ label: "Backend", href: "/best-sellers" },
			{ label: "Fullstack", href: "/sale" },
			{ label: "Mobile", href: "/collections" },
			{ label: "Texnopos", href: "/gift-cards" },
		],
	},
	{
		title: "Kompaniya",
		links: [
			{ label: "Biz haqimizda", href: "/about" },
			{ label: "Jumıs(Karyera)", href: "/careers" },
			{ label: "Enterprise", href: "/enterprise" },
		],
	},
]

const followUsLinks = [
	{ label: "Telegram", href: "https://telegram.com" },
	{ label: "Instagram", href: "https://instagram.com" },
	{ label: "Youtube", href: "https://youtube.com" },
]

const socialLinks = [
	{
		icon: MousePointer2,
		href: "https://telegram.com",
		label: "Follow us Telegram",
	},
	{
		icon: Instagram,
		href: "https://instagram.com",
		label: "Follow us on Instagram",
	},
	{
		icon: Youtube,
		href: "https://youtube.com",
		label: "Follow us on YouTube",
	},
]

const legalLinks = [
	{ label: "Privacy Policy", href: "/privacy" },
	{ label: "Terms of Service", href: "/terms" },
]

export const Footer = () => {
	return (
		<footer className="border-t py-8 md:py-12">
			<Container>
				{/* Brand Section */}
				<div className="mb-8 md:mb-12">
					<Link href="/" className="inline-block">
						<h2 className="text-foreground text-2xl font-bold">Tindy.uz</h2>
					</Link>
					<p className="text-muted-foreground mt-2 max-w-md text-sm">
						Tálim platforması. <br />
						Sorawlarıńız bolsa,{" "}
						<a className="text-primary" href="mailto:amanbayaybek@gmail.com">
							amanbayaybek@gmail.com
						</a>{" "}
						mánziline jazıń
					</p>
				</div>

				{/* Footer Links Grid */}
				<div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{/* Dynamic Footer Sections */}
					{footerSections.map((section) => (
						<div key={section.title} className="space-y-4">
							<h3 className="text-foreground text-sm font-semibold tracking-wider uppercase">
								{section.title}
							</h3>
							<ul className="space-y-3">
								{section.links.map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											className="text-muted-foreground hover:text-foreground text-sm transition-colors"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}

					{/* Follow Us Section */}
					<div className="space-y-4">
						<h3 className="text-foreground text-sm font-semibold tracking-wider uppercase">
							Baylanıs
						</h3>
						<div className="space-y-4">
							<ul className="space-y-3">
								{followUsLinks.map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											className="text-muted-foreground hover:text-foreground text-sm transition-colors"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>

							{/* Social Media Icons */}
							<div className="flex space-x-4">
								{socialLinks.map((social) => {
									const Icon = social.icon
									return (
										<a
											key={social.href}
											href={social.href}
											className="text-muted-foreground hover:text-foreground transition-colors"
											aria-label={social.label}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Icon className="h-5 w-5" />
										</a>
									)
								})}
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-border mt-8 border-t pt-8">
					<div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
						<div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
							{legalLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="text-muted-foreground hover:text-foreground text-xs transition-colors"
								>
									{link.label}
								</Link>
							))}
						</div>
						<p className="text-muted-foreground text-xs">
							© 2025 Tindy.uz. All rights reserved.
						</p>
					</div>
				</div>
			</Container>
		</footer>
	)
}
