import { ICourse } from "@/services/course"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface CartStore {
	cart: ICourse[]
	addToCart: (course: ICourse) => void
	removeFromCart: (courseId: string) => void
	clearCart: () => void
}

export const useCartStore = create<CartStore>()(
	persist(
		(set, get) => ({
			cart: [],
			addToCart: (course) => {
				const { cart } = get()
				if (cart.find((c) => c.id === course.id)) return
				set({ cart: [...cart, course] })
			},
			removeFromCart: (courseId) => {
				const { cart } = get()
				set({ cart: cart.filter((c) => c.id !== courseId) })
			},
			clearCart: () => set({ cart: [] }),
		}),
		{
			name: "cart-storage",
			storage: createJSONStorage(() => localStorage),
		}
	)
)
