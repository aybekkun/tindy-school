import type { AxiosError } from "axios"
import type { ICourse } from "./course/course.types"

export type IPagination = {
	count: number
	next: string | null
	previous: string | null
}

export type IResponseData<T> = {
	data: Array<T>
	pagination: IPagination
}

export type IResponseSingleData<T> = {
	data: T
}

export type IParams = {
	id?: string | number
	page?: number | string
	is_add?: boolean
	limit?: number | string
	role?: number
	name?: string
	status?: ICourse["status"]

	ordering?:
		| "-created_at"
		| "first_name"
		| "last_name"
		| "phone"
		| "role"
		| "index"
	last_name?: string
	teacher_id?: number
}

export type ResponseError = AxiosError<{
	message?: string
	errors?: Array<string>
}>
