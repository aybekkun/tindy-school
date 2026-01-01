import { errorCatch, ResponseError } from "@/lib/api"
import { formatPhone } from "@/lib/utils/format.utils"
import { AuthService } from "@/services/auth/auth.service"
import { useAuthStore } from "@/store"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

const loginSchema = z.object({
	phone: z.string().min(17, { message: "Telefon nomeri tolıq kiritilsin" }),
	password: z.string().min(1, { message: "Parol tolıq kiritilsin" }),
})

type LoginSchemaType = z.infer<typeof loginSchema>

export const useLoginForm = () => {
	const queryClient = useQueryClient()
	const router = useRouter()
	const searchParams = useSearchParams()
	const redirectTo = searchParams.get("redirectTo")
	const { setAuthState } = useAuthStore()
	const form = useForm<LoginSchemaType>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			phone: "",
			password: "",
		},
	})

	const loginMutation = useMutation({
		mutationFn: AuthService.login,
		onSuccess: async () => {
			try {
				const profileData = await queryClient.fetchQuery({
					queryKey: ["profile"],
					queryFn: AuthService.getProfile,
				})

				setAuthState("authenticated", profileData?.data)

				if (redirectTo) {
					router.replace(redirectTo)
				} else {
					router.replace("/")
				}
			} catch (error) {
				console.error("Ошибка при получении профиля:", error)
				// Здесь можно обработать ошибку получения профиля отдельно
			}
		},
		onError: (error: ResponseError) => {
			errorCatch(error)
		},
	})

	const onSubmit = (data: LoginSchemaType) => {
		loginMutation.mutate({
			phone: formatPhone(data.phone),
			password: data.password,
		})
	}

	return {
		form,
		onSubmit: form.handleSubmit(onSubmit),
		isPending: loginMutation.isPending,
	}
}
