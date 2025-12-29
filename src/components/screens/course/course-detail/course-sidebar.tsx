"use client"
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui"
import { ROUTES } from "@/constants"
import { useCourseProgress } from "@/hooks/use-course-progress"
import { useIsAllowed } from "@/hooks/use-is-allowed"
import { formatPriceUZS } from "@/lib/utils/format.utils"
import { ICourse } from "@/services/course"
import { useCreateOrder } from "@/services/order/order.api"
import { useCartStore } from "@/store/use-cart-store"
import {
	FileText,
	Heart,
	InfinityIcon,
	PlayCircle,
	ShoppingCart,
	Trophy,
} from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

type Props = {
	course: ICourse
}

export const CourseSidebar = ({ course }: Props) => {
	const allowed = useIsAllowed(course.slug)
	const { last_lesson_id } = useCourseProgress(course.id)
	const { addToCart, cart, removeFromCart } = useCartStore()
	const { mutate: createOrder, isPending } = useCreateOrder()
	const allLessons = course.modules.flatMap((m) => m.lessons || [])
	const currentLesson =
		allLessons.find((l) => l?.id === last_lesson_id) || allLessons[0]

	const isInCart = cart.some((c) => c.id === course.id)

	const handleAddToCart = () => {
		if (isInCart) {
			removeFromCart(course.id)
			toast.info("Kurs korzinadan óshirildi")
		} else {
			addToCart(course)
			toast.success("Kurs korzinaǵa qosıldı")
		}
	}

	const handleBuyNow = () => {
		createOrder([course.id], {
			onSuccess: (data) => {
				window.location.href = data.pay_url
			},
			onError: () => {
				toast.error("Qátelik júz berdi")
			},
		})
	}

	if (allowed) {
		return (
			<div className="order-2 col-span-1 border lg:col-span-2 bg-card rounded-sm p-6 flex flex-col gap-4 sticky top-20">
				<h3 className="text-xl font-semibold">Oqıwdı dawam etiw</h3>
				<div className="flex flex-col gap-2">
					<p className="text-muted-foreground text-sm">Keyingi sabaq:</p>
					<p className="font-medium text-lg line-clamp-2">
						{currentLesson ? currentLesson.title : "Házirshe sabaq joq"}
					</p>
				</div>
				{currentLesson ? (
					<Button asChild className="w-full" size="lg">
						<Link href={ROUTES.COURSES.LESSON(course.slug, currentLesson.id)}>
							<PlayCircle className="w-4 h-4 mr-2" />
							Dawam etiw
						</Link>
					</Button>
				) : (
					<Button disabled className="w-full" size="lg">
						<PlayCircle className="w-4 h-4 mr-2" />
						Dawam etiw
					</Button>
				)}
			</div>
		)
	}

	return (
		<div className="order-2 col-span-1 lg:col-span-2 flex flex-col gap-4 sticky top-20">
			<Card>
				{/* Price Section */}
				<CardHeader>
					<CardTitle>{course.title}</CardTitle>
					<CardDescription>
						{course.price ? formatPriceUZS(course.price) : "Biypul"}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-3">
						<div className="flex gap-2">
							<Button
								className="flex-1 text-lg font-bold h-12"
								size="lg"
								variant={isInCart ? "secondary" : "default"}
								onClick={handleAddToCart}
								disabled={isPending}
							>
								<ShoppingCart className="w-4 h-4 mr-2" />{" "}
								<span className="hidden md:block">
									{isInCart ? "Korzinadan óshiriw" : "Korzina qosıw"}
								</span>
							</Button>
							<Button
								variant="outline"
								size="icon"
								className="h-12 w-12 shrink-0"
							>
								<Heart className="w-6 h-6" />
							</Button>
						</div>
						<Button
							variant="outline"
							className="w-full text-lg font-bold h-12"
							size="lg"
							onClick={handleBuyNow}
							disabled={isPending}
						>
							{isPending ? "Jiberilmekte..." : "Satıp alıw"}
						</Button>
					</div>
					<div className="flex flex-col gap-4 mt-4">
						<h4 className="font-bold text-foreground text-base">
							Bul kursqa kiredi:
						</h4>
						<ul className="flex flex-col gap-3">
							<li className="flex items-center gap-3 text-sm text-muted-foreground">
								<FileText className="w-4 h-4 shrink-0" />
								<span>{course.lesson_count} sabaq</span>
							</li>

							<li className="flex items-center gap-3 text-sm text-muted-foreground">
								<InfinityIcon className="w-4 h-4 shrink-0" />
								<span>Bir ómirlik qollanba</span>
							</li>

							<li className="flex items-center gap-3 text-sm text-muted-foreground">
								<Trophy className="w-4 h-4 shrink-0" />
								<span>Sertifikat</span>
							</li>
						</ul>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
