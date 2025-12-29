export interface IOrder {
	id: string
	courses: {
		id: string
		title: string
		sub_title: string
		image: string
		price: string
		slug: string
		lesson_count: number
	}[]
	amount: string
	is_paid: boolean
	is_cash: boolean
	pay_url: string
	created_at: string
}
