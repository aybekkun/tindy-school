import { AxiosError } from "axios"

export type ResponseError = AxiosError<{
	message?: string
	errors?: Array<string>
}>

export interface ResponseData<T> {
	data: Array<T>
	pagination: {
		count: number
	}
}

export interface ResponseSingleData<T> {
	data: T
}
