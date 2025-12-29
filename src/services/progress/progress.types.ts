import { ICourse } from "../course"

export interface IProgress {
	course: ICourse
	last_lesson_id: string
	completed_lesson_ids: string[]
	progress_percent: number
	created_at: Date
	updated_at: Date
}
