import type { ICourse } from "../course/course.types"

export interface ICart {
	id: string
	course: ICourse
	created_at: string
}
