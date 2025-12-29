"use client"

import {
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { CheckCircle, Lock, PlayCircle } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

interface LessonItemProps {
	lesson: {
		id: string
		title: string
		duration?: string
		isFree?: boolean
	}
	lessonIndex: number
	courseSlug: string
	isLocked: boolean
	isCompleted: boolean
	isCurrent: boolean
	onClick?: () => void
}

export const LessonItem = ({
	lesson,
	lessonIndex,
	courseSlug,
	isLocked,
	isCompleted,
	isCurrent,
	onClick,
}: LessonItemProps) => {
	const itemRef = useRef<HTMLDivElement>(null)

	// Auto-scroll to active lesson when component mounts or becomes active
	useEffect(() => {
		if (isCurrent && itemRef.current) {
			// Small delay to ensure DOM is ready
			itemRef.current?.scrollIntoView({
				behavior: "instant",
				block: "center",
			})
		}
	}, [isCurrent])
	// Determine which icon to show
	const getStatusIcon = () => {
		if (isLocked) {
			return <Lock className="size-4" />
		}
		if (isCompleted) {
			return <CheckCircle className="size-4 text-green-500" />
		}

		return <PlayCircle className={cn("size-4", isCurrent && "text-primary")} />
	}

	return (
		<SidebarMenuSubItem>
			<SidebarMenuSubButton
				asChild={!isLocked}
				isActive={isCurrent}
				className={cn(
					"group transition-colors",
					isLocked && "opacity-60 cursor-pointer overflow-hidden",
					isCurrent && "text-primary"
				)}
				onClick={isLocked ? onClick : undefined}
			>
				{isLocked ? (
					<div className="flex items-center justify-between w-full h-full min-h-7.5">
						<div ref={itemRef} className="flex items-center gap-2">
							{getStatusIcon()}
							<span className="text-sm">
								{lessonIndex + 1}. {lesson.title}
							</span>
						</div>
					</div>
				) : (
					<Link
						href={`/course/${courseSlug}/${lesson.id}`}
						className={cn(
							"flex items-center justify-between w-full",
							isCurrent && "text-primary"
						)}
					>
						<div ref={itemRef} className="flex items-center gap-2">
							{getStatusIcon()}
							<span className="text-sm">
								{lessonIndex + 1}. {lesson.title}
							</span>
						</div>
					</Link>
				)}
			</SidebarMenuSubButton>
		</SidebarMenuSubItem>
	)
}
