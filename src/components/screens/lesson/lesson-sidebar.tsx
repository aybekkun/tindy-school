"use client"

import { Button } from "@/components/ui"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ROUTES } from "@/constants"
import { useCourseProgress } from "@/hooks/use-course-progress"
import { ICourse } from "@/services/course"
import { ArrowLeft, Book, Settings, User } from "lucide-react"
import Link from "next/link"
import { LessonSidebarAccordion } from "./lesson-sidebar-acordion"

type Props = {
	course?: ICourse
}

export function LessonSidebar({ course }: Props) {
	const totalLessons =
		course?.modules.reduce(
			(acc, module) => acc + (module.lessons?.length || 0),
			0
		) || 0

	const { completed_lesson_ids } = useCourseProgress(course?.id || "")

	const progressPercentage =
		totalLessons > 0
			? Math.round(((completed_lesson_ids?.length || 0) / totalLessons) * 100)
			: 0

	return (
		<Sidebar className="">
			<SidebarHeader className="bg-neutral-100 border-b">
				<SidebarMenu>
					<SidebarMenuItem>
						<Button variant={"link"} className="text-foreground" asChild>
							<Link href={ROUTES.COURSES.SINGLE(course?.slug || "")}>
								<ArrowLeft className="w-4 h-4" />
								Kursqa qaytıw
							</Link>
						</Button>
					</SidebarMenuItem>
				</SidebarMenu>
				<div className="px-2 py-2">
					<h2 className="font-semibold text-lg leading-tight">
						{course?.title}
					</h2>
					<div className="mt-3 space-y-1">
						<div className="flex items-center justify-between text-xs text-muted-foreground">
							<span>Progress</span>
							<span>{progressPercentage}%</span>
						</div>
						<Progress value={progressPercentage} className="h-2" />
					</div>
				</div>
			</SidebarHeader>
			<SidebarContent className="bg-neutral-100">
				<ScrollArea className="h-full">
					{course?.modules?.map((module, index) => (
						<LessonSidebarAccordion
							course={course}
							moduleIndex={index}
							key={module.id}
							module={module}
							courseSlug={course.slug}
						/>
					))}
				</ScrollArea>
			</SidebarContent>
			<SidebarFooter className="bg-neutral-100 px-4 border-t">
				<SidebarMenu className="space-y-1">
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link href={ROUTES.PROFILE.ROOT}>
								<User className="w-4 h-4" />
								Profil
							</Link>
						</SidebarMenuButton>
						<SidebarMenuButton asChild>
							<Link href={ROUTES.PROFILE.MY_COURSES}>
								<Book className="w-4 h-4" />
								Meniń kurslarım
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link href={ROUTES.PROFILE.SETTINGS}>
								<Settings className="w-4 h-4" />
								Sazlawlar
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	)
}
