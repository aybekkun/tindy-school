"use client"

import { Button, Container } from "@/components/ui"
import { useGetCertificateById } from "@/services/certificate"
import { format } from "date-fns"
import { uz } from "date-fns/locale"
import { Award, Calendar, Download, Loader2, Share2 } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"
import { useRef } from "react"
import { toast } from "sonner"

interface CertificateViewProps {
	id: string
}

export const CertificateView = ({ id }: CertificateViewProps) => {
	const { data, isLoading, isError } = useGetCertificateById(id)
	const certificateRef = useRef<HTMLDivElement>(null)

	const handleDownload = () => {
		window.print()
	}

	const handleShare = () => {
		const url = window.location.href
		navigator.clipboard.writeText(url)
		toast.success("Mánzil koshirildi")
	}

	if (isLoading) {
		return (
			<div className="flex min-h-[60vh] items-center justify-center">
				<Loader2 className="h-10 w-10 animate-spin text-primary" />
			</div>
		)
	}

	if (isError || !data?.data) {
		return (
			<Container className="py-20 text-center">
				<div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-4">
					<Award className="h-10 w-10" />
				</div>
				<h2 className="text-2xl font-bold mb-2">Sertifikat tabılmadı</h2>
				<p className="text-muted-foreground mb-6">
					Iltimas, mánzildiń durıslıǵın tekserip kóriń.
				</p>
			</Container>
		)
	}

	const certificate = data.data

	return (
		<Container className="py-10 max-w-5xl">
			<div className="flex justify-end gap-3 mb-8 no-print">
				<Button variant="outline" onClick={handleShare}>
					<Share2 className="mr-2 h-4 w-4" />
					Úlesiw
				</Button>
				<Button onClick={handleDownload}>
					<Download className="mr-2 h-4 w-4" />
					Júklep alıw (Print)
				</Button>
			</div>

			<div
				ref={certificateRef}
				className="relative bg-white text-slate-900 overflow-hidden border-[16px] border-double border-slate-200 shadow-2xl p-12 md:p-20 print:aspect-[1.414/1] print:border-none print:shadow-none print:p-8 print:w-[297mm] print:h-[210mm] print:fixed print:top-0 print:left-0 print:z-[9999] print:m-0"
			>
				{/* Background Elements */}
				<div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-50 print:opacity-100" />
				<div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32 blur-3xl opacity-50 print:opacity-100" />

				{/* Decorative Border Corners */}
				<div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/30" />
				<div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/30" />
				<div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary/30" />
				<div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary/30" />

				<div className="relative flex flex-col items-center text-center space-y-8 print:space-y-6">
					<div className="space-y-2">
						<Award className="h-16 w-16 text-primary mx-auto mb-4 print:mb-2" />
						<h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-slate-800 uppercase print:text-5xl">
							Sertifikat
						</h1>
						<p className="text-xl md:text-2xl font-medium text-slate-500 uppercase tracking-[0.2em] print:text-lg">
							Kurs tamamlanǵanlıǵı haqqında
						</p>
					</div>

					<div className="w-24 h-1 bg-primary/30 rounded-full" />

					<div className="space-y-4 print:space-y-2">
						<p className="text-lg md:text-xl italic text-slate-600 print:text-base">
							Bul sertifikat beriledi:
						</p>
						<h2 className="text-3xl md:text-5xl font-bold text-slate-900 border-b-2 border-slate-100 pb-2 px-8 print:text-4xl print:pb-1">
							{certificate.first_name} {certificate.last_name}
						</h2>
					</div>

					<div className="max-w-2xl">
						<p className="text-lg md:text-xl text-slate-700 leading-relaxed print:text-base">
							<b>&quot;{certificate.course_title}&quot;</b> kursın tabıslı
							tamamlaǵanlıǵı hám barlıq talaplardı orınlaǵanlıǵı ushın berildi.
						</p>
					</div>

					<div className="pt-12 grid grid-cols-1 md:grid-cols-3 w-full items-end gap-8 print:pt-6 print:gap-4">
						<div className="flex flex-col items-start gap-1">
							<p className="text-sm font-semibold uppercase text-slate-400 print:text-[10px]">
								Sáne
							</p>
							<div className="flex items-center gap-2 text-lg font-medium print:text-sm">
								<Calendar className="h-5 w-5 text-slate-400 print:h-4 print:w-4" />
								{format(new Date(certificate.issued_at), "d-MMMM, yyyy", {
									locale: uz,
								})}
							</div>
						</div>

						<div className="flex flex-col items-center">
							<div className="p-2 border border-slate-100 rounded-lg bg-white">
								<QRCodeSVG
									value={`${
										typeof window !== "undefined" ? window.location.origin : ""
									}/certificates/${certificate.id}`}
									size={100}
									className="print:w-20 print:h-20"
								/>
							</div>
							<p className="mt-2 text-[10px] text-slate-400 uppercase tracking-widest print:text-[8px]">
								Sertifikat ID: {certificate.id.slice(0, 8)}
							</p>
						</div>

						<div className="flex flex-col items-end gap-1">
							<p className="text-sm font-semibold uppercase text-slate-400 print:text-[10px]">
								Tindy School
							</p>
							<p className="text-lg font-bold border-t border-slate-200 mt-4 pt-2 px-4 italic print:text-sm print:mt-2 print:pt-1">
								Platforma Administratorı
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-12 text-center no-print">
				<p className="text-muted-foreground text-sm">
					Bul sertifikat elektron hújjet bolıp esaplanadı hám joqarıdaǵı QR kod
					járdeminde haqıyqıylıǵın tekseriw múmkin.
				</p>
			</div>

			<style jsx global>{`
				@media print {
					@page {
						size: A4 landscape;
						margin: 0;
					}
					body {
						margin: 0;
						padding: 0;
						-webkit-print-color-adjust: exact !important;
						print-color-adjust: exact !important;
					}
					.no-print {
						display: none !important;
					}
					header,
					footer,
					nav,
					aside {
						display: none !important;
					}
					main {
						padding: 0 !important;
						margin: 0 !important;
					}
					.container {
						max-width: none !important;
						width: 100% !important;
						padding: 0 !important;
						margin: 0 !important;
					}
				}
			`}</style>
		</Container>
	)
}
