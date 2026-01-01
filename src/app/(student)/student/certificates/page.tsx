import { MyCertificates } from "@/components/screens/student/certificates"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Meniń sertifikatlarım",
	description: "Tamamlanǵan kurslar ushın berilgen sertifikatlar dizimi",
}

const CertificatesPage = () => {
	return <MyCertificates />
}

export default CertificatesPage
