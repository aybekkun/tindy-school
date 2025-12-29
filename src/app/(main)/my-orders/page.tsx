"use client"

import {
	Badge,
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Container,
} from "@/components/ui"
import { useGetMyOrders } from "@/services/order/order.api"
import { ExternalLink, FileText } from "lucide-react"
import Link from "next/link"

const MyOrdersPage = () => {
	const { data: orders, isLoading } = useGetMyOrders()

	if (isLoading) {
		return (
			<Container className="py-10">
				<h1 className="text-3xl font-bold mb-8">Meniń buyırtpalarım</h1>
				<div className="space-y-4">
					{[1, 2, 3].map((i) => (
						<div key={i} className="h-40 bg-muted animate-pulse rounded-md" />
					))}
				</div>
			</Container>
		)
	}

	return (
		<Container className="py-10">
			<h1 className="text-3xl font-bold mb-8">Meniń buyırtpalarım</h1>

			{!orders || orders.data.length === 0 ? (
				<div className="py-20 text-center">
					<p className="text-muted-foreground mb-4">
						Siz ele hesh qanday buyırtpa etpedińiz
					</p>
					<Button asChild>
						<Link href="/courses">Kurslardı kóriw</Link>
					</Button>
				</div>
			) : (
				<div className="space-y-6">
					{orders.data?.map((order) => (
						<Card key={order.id}>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
								<div className="flex flex-col gap-1">
									<CardTitle className="text-lg">
										Buyırtpa #{order.id.slice(0, 8)}
									</CardTitle>
									<p className="text-sm text-muted-foreground">
										{new Date(order.created_at).toLocaleString("uz-UZ", {
											day: "2-digit",
											month: "2-digit",
											year: "numeric",
											hour: "2-digit",
											minute: "2-digit",
										})}
									</p>
								</div>
								<Badge variant={order.is_paid ? "default" : "destructive"}>
									{order.is_paid ? "Tólengen" : "Tólenbegen"}
								</Badge>
							</CardHeader>
							<CardContent>
								<div className="flex flex-col md:flex-row gap-6 justify-between">
									<div className="flex-1 space-y-3">
										{order.courses.map((course) => (
											<div
												key={course.id}
												className="flex items-center gap-3 text-sm"
											>
												<FileText className="w-4 h-4 text-primary" />
												<span>{course.title}</span>
											</div>
										))}
									</div>
									<div className="flex flex-col items-end gap-4 min-w-50">
										<div className="text-xl font-bold">
											{Number(order.amount).toLocaleString("uz-UZ")} UZS
										</div>
										{!order.is_paid && order.pay_url && (
											<Button asChild className="w-full md:w-auto">
												<a
													href={order.pay_url}
													target="_blank"
													rel="noopener noreferrer"
												>
													Házir tólew
													<ExternalLink className="w-4 h-4 ml-2" />
												</a>
											</Button>
										)}
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			)}
		</Container>
	)
}

export default MyOrdersPage
