import { $authHost, $host } from "@/lib/api/axios.instance"

import type { IResponseData, IResponseSingleData } from "../service.types"
import type { ICertificate } from "./certificate.types"

export const CertificateService = {
	async getMyCertificates() {
		const { data } = await $authHost.get<IResponseData<ICertificate>>(
			"/my-certificates"
		)
		return data
	},

	async getById(id: string) {
		const { data } = await $host.get<IResponseSingleData<ICertificate>>(
			`/my-certificates/${id}`
		)
		return data
	},
}
