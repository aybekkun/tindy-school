import { MyProgress } from "@/components/screens/student/my-progress/my-progress"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Мои Курсы | Прогресс обучения",
	description: "Отслеживайте свой прогресс обучения и получайте сертификаты.",
}

const MyProgressPage = () => {
	return <MyProgress />
}

export default MyProgressPage
