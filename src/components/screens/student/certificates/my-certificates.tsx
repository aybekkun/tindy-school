"use client"

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Container,
	Skeleton,
} from "@/components/ui"
import { useGetMyCertificates } from "@/services/certificate"
import { format } from "date-fns"
import { uz } from "date-fns/locale"
import { Award, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"

export const MyCertificates = () => {
	const { data, isLoading, isError } = useGetMyCertificates()

	if (isLoading) {
		return (
			<Container className="py-8 space-y-6">
				<div className="space-y-2">
					<Skeleton className="h-10 w-48" />
					<Skeleton className="h-5 w-64" />
				</div>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{[1, 2, 3].map((i) => (
						<Skeleton key={i} className="h-48 w-full rounded-xl" />
					))}
				</div>
			</Container>
		)
	}

	if (isError) {
		return (
			<Container className="py-20 text-center">
				<div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-4">
					<Award className="h-10 w-10" />
				</div>
				<h2 className="text-2xl font-bold mb-2">Qáte júz berdi</h2>
				<p className="text-muted-foreground mb-6">
					Sertifikatlardı júklewde qáte júz berdi. Iltimas, qaytadan urınıp
					kóriń.
				</p>
				<Button onClick={() => window.location.reload()}>Jańalaw</Button>
			</Container>
		)
	}

	const certificates = data?.data || []

	if (certificates.length === 0) {
		return (
			<Container className="py-20 text-center">
				<div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted text-muted-foreground mb-4">
					<Award className="h-10 w-10" />
				</div>
				<h2 className="text-2xl font-bold mb-2">Sertifikatlar ele joq</h2>
				<p className="text-muted-foreground mb-6">
					Kurslardı tamamlań hám óz sertifikatlarıńızdı alıń.
				</p>
				<Link href="/student">
					<Button>Kurslarım</Button>
				</Link>
			</Container>
		)
	}

	return (
		<Container className="py-8 space-y-8">
			<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div className="space-y-1">
					<h1 className="text-3xl font-bold tracking-tight">Sertifikatlarım</h1>
					<p className="text-muted-foreground">
						Tamamlanǵan kurslar ushın berilgen sertifikatlar
					</p>
				</div>
			</div>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{certificates.map((certificate) => (
					<Card
						key={certificate.id}
						className="group relative overflow-hidden transition-all hover:shadow-lg hover:border-primary/50"
					>
						<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
							<Award className="h-24 w-24 text-primary" />
						</div>
						<CardHeader>
							<div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
								<Award className="h-6 w-6" />
							</div>
							<CardTitle className="line-clamp-2 leading-tight">
								{certificate.course_title}
							</CardTitle>
							<CardDescription className="flex items-center gap-2">
								<Calendar className="h-4 w-4" />
								{format(new Date(certificate.issued_at), "d-MMMM, yyyy", {
									locale: uz,
								})}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
								<div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center font-bold text-xs uppercase">
									{certificate.first_name[0]}
									{certificate.last_name[0]}
								</div>
								<span>
									{certificate.first_name} {certificate.last_name}
								</span>
							</div>
							<Link href={`/certificates/${certificate.id}`}>
								<Button className="w-full group/btn" variant="outline">
									Kórip shıǵıw
									<ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
								</Button>
							</Link>
						</CardContent>
					</Card>
				))}
			</div>
		</Container>
	)
}
