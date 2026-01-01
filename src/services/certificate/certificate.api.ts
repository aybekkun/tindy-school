import { useQuery } from "@tanstack/react-query"
import { CertificateService } from "./certificate.service"

export const useGetMyCertificates = () => {
	return useQuery({
		queryKey: ["my-certificates"],
		queryFn: () => CertificateService.getMyCertificates(),
	})
}

export const useGetCertificateById = (id: string) => {
	return useQuery({
		queryKey: ["certificate", id],
		queryFn: () => CertificateService.getById(id),
		enabled: !!id,
	})
}
