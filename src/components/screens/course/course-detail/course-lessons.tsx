"use client"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui"
import { ROUTES } from "@/constants"
import { useCourseProgress } from "@/hooks/use-course-progress"
import { useIsAllowed } from "@/hooks/use-is-allowed"
import { cn } from "@/lib/utils"
import { ICourse } from "@/services/course"
import { CheckCircle, ChevronDown, Lock, PlayCircle } from "lucide-react"
import Link from "next/link"
import { type FC } from "react"

interface Props {
	className?: string
	course: ICourse
}

export const CourseLessons: FC<Props> = ({ className = ``, course }) => {
	const hasAccess = !!useIsAllowed(course.slug)

	const { last_lesson_id, completed_lesson_ids } = useCourseProgress(course.id)

	return (
		<div className={className}>
			<Accordion
				type="multiple"
				className="w-full space-y-4"
				defaultValue={course.modules.map((m) => m.id)}
			>
				{course.modules.map((module, index) => (
					<AccordionItem
						key={module.id}
						value={module.id}
						className="border border-border rounded-lg bg-card overflow-hidden"
					>
						<AccordionTrigger className="group hover:no-underline px-4 py-3 [&>svg]:hidden">
							<div className="flex items-center gap-4 w-full">
								<div className="bg-muted/50 p-1 rounded-full group-data-[state=open]:rotate-180 transition-transform duration-200">
									<ChevronDown className="w-4 h-4 text-muted-foreground group-data-[state=open]:text-primary" />
								</div>
								<div className="flex flex-col items-start text-left">
									<span className="font-semibold text-base">
										{index + 1}. {module.title}
									</span>
									<span className="text-sm text-muted-foreground font-normal">
										{module.lessons?.length || 0} sabaq
									</span>
								</div>
							</div>
						</AccordionTrigger>
						<AccordionContent className="px-3 pb-3 pt-0">
							<div className="flex flex-col gap-2 mt-2">
								{module.lessons?.map((lesson, lessonIndex) => {
									const isLocked = !hasAccess && !lesson.is_free
									const isCompleted = completed_lesson_ids?.includes(lesson.id)
									const isCurrent = last_lesson_id === lesson.id

									return (
										<Link
											key={lesson.id}
											href={
												isLocked
													? "#"
													: ROUTES.COURSES.LESSON(course.slug, lesson.id)
											}
											className={cn(
												"flex items-center justify-between p-2 md:p-4 rounded-md transition-all border border-transparent",
												isCurrent
													? "bg-primary/10 border-primary/20"
													: "bg-secondary/50 hover:bg-secondary border-transparent",
												isLocked && "opacity-50 cursor-not-allowed bg-muted/50"
											)}
											onClick={(e) => {
												if (isLocked) {
													e.preventDefault()
													return
												}
											}}
										>
											<div className="flex items-center gap-4">
												<div
													className={cn(
														"rounded-full p-1",
														isCurrent ? "text-primary" : "text-muted-foreground"
													)}
												>
													{isCompleted ? (
														<CheckCircle className="w-6 h-6 text-green-500" />
													) : isLocked ? (
														<Lock className="w-6 h-6" />
													) : (
														<PlayCircle
															className={cn(
																"w-6 h-6",
																isCurrent && "fill-primary/20"
															)}
														/>
													)}
												</div>
												<div className="flex flex-col gap-0.5">
													<span
														className={cn(
															"text-sm font-medium transition-colors",
															isCurrent ? "text-blue-500" : "text-foreground",
															isCompleted && "text-muted-foreground"
														)}
													>
														{lessonIndex + 1}. {lesson.title}
													</span>
													{isCurrent && (
														<span className="text-xs text-blue-500/80 font-medium">
															Sońǵı sabaq
														</span>
													)}
												</div>
											</div>

											<div className="flex items-center gap-2">
												{lesson.is_free && !hasAccess && (
													<span className="text-xs bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full font-medium border border-green-500/20">
														Free
													</span>
												)}
											</div>
										</Link>
									)
								})}
							</div>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	)
}
