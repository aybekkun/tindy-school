"use client"
import { getAccessToken } from "@/lib/api"
import { useProfileQuery } from "@/services/auth/auth.api"
import { useAuthStore } from "@/store"
import { useEffect } from "react"

type Props = {
	children?: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {
	const { setAuthState } = useAuthStore()
	const hasToken = !!getAccessToken()

	const { data, isSuccess, isError, isLoading, isFetching } = useProfileQuery()

	useEffect(() => {
		// Если нет токена, сразу устанавливаем unauthenticated
		if (!hasToken) {
			setAuthState("unauthenticated", null)
			return
		}

		// Если идет загрузка, устанавливаем loading
		if (isLoading) {
			setAuthState("loading", null)
			return
		}

		// Если успешно получили данные
		if (isSuccess && data?.data) {
			setAuthState("authenticated", data.data)
			return
		}

		// Если произошла ошибка
		if (isError) {
			setAuthState("unauthenticated", null)
		}
	}, [hasToken, isLoading, isFetching, isSuccess, isError, data, setAuthState])

	return <>{children}</>
}
