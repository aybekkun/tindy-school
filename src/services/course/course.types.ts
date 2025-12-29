import type { ICategory } from "../category/category.types"
import type { ILevel } from "../level/level.types"
import { IParams } from "../service.types"
export type ICourseCreator = {
	id: number
	first_name?: string | null
	last_name?: string | null
	avatar?: string | null
	bio?: string | null
}
export interface ICourse {
	id: string
	creator: ICourseCreator | null
	category?: Array<ICategory>
	level?: ILevel | null
	title: string
	sub_title?: string | null
	description?: string | null
	image?: string | null
	price?: string
	status?: "published" | "draft" | "blocked" | "banned" | "deleted"
	teacher_commission_percent?: string | null
	slug: string
	is_free: boolean | null
	buyer_count: number
	lesson_count: number
	modules: IModule[]
}

export interface IModule {
	id: string
	title: string
	slug: string
	index: number
	lessons?: ILesson[]
}

export interface ILesson {
	id: string
	title: string
	slug: string
	index: number
	is_free: boolean
	content?: string
	video?: string
	is_published?: boolean
}

export interface ICourseAllowed {
	allowed: boolean
}

export interface ICourseParams extends IParams {
	category?: string
	level?: string
	search?: string
	is_free?: string
}
