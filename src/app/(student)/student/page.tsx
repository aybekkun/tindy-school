import { MyCourses } from "@/components/screens/student/my-courses"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Meniń kurslarım",
	description: "Oqıp atırǵan kurslar dizimi",
}

const MyCoursesPage = () => {
	return <MyCourses />
}

export default MyCoursesPage
