"use client"

import { Button, Card, CardContent, Container } from "@/components/ui"
import { formatPriceUZS } from "@/lib/utils/format.utils"
import { useCreateOrder } from "@/services/order/order.api"
import { useCartStore } from "@/store/use-cart-store"
import { ShoppingCart, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"

const CartPage = () => {
	const { cart, removeFromCart } = useCartStore()
	const { mutate: createOrder, isPending } = useCreateOrder()

	const totalPrice = cart.reduce(
		(acc, course) => acc + Number(course.price || 0),
		0
	)

	const handleCheckout = () => {
		const courseIds = cart.map((c) => c.id)
		createOrder(courseIds, {
			onSuccess: (data) => {
				window.location.href = data.pay_url
			},
			onError: () => {
				toast.error("Qátelik júz berdi")
			},
		})
	}

	return (
		<Container className="py-10">
			<h1 className="text-3xl font-bold mb-8">Meniń korzinam</h1>

			{cart.length === 0 ? (
				<div className="flex flex-col items-center justify-center py-20 text-center">
					<div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
						<ShoppingCart className="w-10 h-10 text-muted-foreground" />
					</div>
					<h2 className="text-xl font-semibold mb-2">Korzinańız bos</h2>
					<p className="text-muted-foreground mb-6">
						Siz ele hesh qanday kurs qospadıńız
					</p>
					<Button asChild>
						<Link href="/courses">Kurslardı kóriw</Link>
					</Button>
				</div>
			) : (
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2 space-y-4">
						{cart.map((course) => (
							<Card key={course.id} className="overflow-hidden">
								<CardContent className="p-4 flex gap-4">
									<div className="relative w-32 h-20 shrink-0">
										<Image
											src={course.image || "/placeholder.jpg"}
											alt={course.title}
											fill
											className="object-cover rounded-md"
										/>
									</div>
									<div className="flex-1 flex flex-col justify-between">
										<div className="flex justify-between items-start">
											<h3 className="font-semibold line-clamp-2">
												{course.title}
											</h3>
											<Button
												variant="ghost"
												size="icon"
												className="text-destructive hover:text-destructive hover:bg-destructive/10 -mt-2 -mr-2"
												onClick={() => removeFromCart(course.id)}
											>
												<Trash2 className="w-4 h-4" />
											</Button>
										</div>
										<p className="font-bold text-primary">
											{course.price ? formatPriceUZS(course.price) : "Biypul"}
										</p>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					<div className="lg:col-span-1">
						<Card className="sticky top-24">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Jámi summa</h3>
								<div className="flex justify-between items-center mb-6 text-2xl font-bold">
									<span>Jámi:</span>
									<span>{formatPriceUZS(totalPrice)}</span>
								</div>
								<Button
									className="w-full h-12 text-lg"
									onClick={handleCheckout}
									disabled={isPending}
								>
									{isPending ? "Jiberilmekte..." : "Tólewge ótiw"}
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			)}
		</Container>
	)
}

export default CartPage
