import type { ICourse } from "../course/course.types"

export interface ICollection {
	id: string
	title: string
	slug: string
	description?: string
	courses: { id: number; index: number; course: ICourse }[]
}
