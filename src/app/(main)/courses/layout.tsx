import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Barlıq kurslar | Tindy",
	description:
		"Tindy platformasındaǵı barlıq onlayn kurslar dizimi. Ózińizge mınásip kurstı saylań hám oqıwdı baslań.",
	keywords: ["onlayn kurslar", "bilim", "tindy", "kurslar dizimi"],
}

export default function CoursesLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}
