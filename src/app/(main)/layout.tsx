import { Footer, Header } from "@/components/layout/main-layout"

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="w-full h-full flex-1">{children}</main>
			<Footer />
		</div>
	)
}
