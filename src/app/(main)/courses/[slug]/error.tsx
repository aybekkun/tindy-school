"use client"

import { Button, Container } from "@/components/ui"
import { useEffect } from "react"

export default function CourseError({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<Container className="py-20 flex flex-col items-center justify-center text-center">
			<h2 className="text-2xl font-bold mb-4">
				Nimadir noto&apos;g&apos;ri ketdi!
			</h2>
			<p className="text-muted-foreground mb-8">
				Kurs ma&apos;lumotlarini yuklashda xatolik yuz berdi.
			</p>
			<Button onClick={() => reset()} variant="outline">
				Qayta urinish
			</Button>
		</Container>
	)
}
