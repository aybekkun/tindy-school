import { SidebarConfig } from "@/components/shared"
import {
	BookOpen,
	ChartArea,
	HelpCircle,
	LayoutDashboard,
	LogOut,
	Settings,
} from "lucide-react"

export const studentSidebarConfig: SidebarConfig[] = [
	{
		title: "Tiykarǵı",
		items: [
			{
				title: "Bas bet",
				href: "/student",
				icon: LayoutDashboard,
				description: "Sholuw hám statistika",
			},
			{
				title: "Meniń kurslarım",
				href: "/student/my-courses",
				icon: BookOpen,
				description: "Aktiv hám tamamlanǵan kurslar",
			},
			{
				title: "Progress",
				href: "/student/my-progress",
				icon: ChartArea,
				description: "Sońǵı sabaqlar",
			},
		],
	},
	/* 	{
		title: "Jetiskenlikler",
		items: [
			{
				title: "Sertifikatlar",
				href: "/student/certificates",
				icon: Award,
				description: "Alınǵan sertifikatlar",
			},
			{
				title: "Progress",
				href: "/student/progress",
				icon: TrendingUp,
				description: "Oqıw statistikası",
			},
		],
	}, */
	{
		title: "Sazlawlar",
		items: [
			{
				title: "Akkaunt sazlawları",
				href: "/student/settings",
				icon: Settings,
				description: "Jeke maǵlıwmatlar hám qawipsizlik",
			},
			{
				title: "Qollap-quwatlaw",
				href: "/student/support",
				icon: HelpCircle,
				description: "Járdem orayı hám FAQ",
			},
		],
	},
	{
		items: [
			{
				title: "Shıǵıw",
				href: "/logout",
				icon: LogOut,
				description: "Akkaunttan shıǵıw",
			},
		],
	},
]
