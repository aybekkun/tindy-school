import { CertificateView } from "@/components/screens/student/certificates"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Sertifikat",
	description: "Kurs tamamlanǵanlıǵı haqqında sertifikat",
}

const CertificatePage = async ({
	params,
}: {
	params: Promise<{ slug: string }>
}) => {
	const { slug } = await params
	return <CertificateView id={slug} />
}

export default CertificatePage
