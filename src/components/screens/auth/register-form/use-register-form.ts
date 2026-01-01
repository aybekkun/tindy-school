"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import {
	errorCatch,
	getCompleteToken,
	getVerifyToken,
	ResponseError,
} from "@/lib/api"
import { formatPhone } from "@/lib/utils/format.utils"
import { AuthService } from "@/services/auth/auth.service"
import { useAuthStore } from "@/store"

// Schemas
const phoneSchema = z.object({
	phone: z.string().min(17, { message: "Telefon nomeri tolıq kiritilsin" }),
})

const otpSchema = z.object({
	otp: z.string().min(6, { message: "OTP kod 6 sannan ibarat bolıwı kerek" }),
})

const completeSchema = z.object({
	first_name: z.string().min(2, { message: "Atıńızdı kiritiń" }),
	last_name: z.string().min(2, { message: "Familiyańızdı kiritiń" }),
	password: z
		.string()
		.min(6, { message: "Parol keminde 6 simvoldan ibarat bolıwı kerek" }),
})

export type PhoneSchemaType = z.infer<typeof phoneSchema>
export type OtpSchemaType = z.infer<typeof otpSchema>
export type CompleteSchemaType = z.infer<typeof completeSchema>

export const useRegisterForm = () => {
	const { setAuthState } = useAuthStore()
	const router = useRouter()
	const queryClient = useQueryClient()
	const [currentStep, setCurrentStep] = useState(1)
	const [phone, setPhone] = useState("")

	// Forms
	const phoneForm = useForm<PhoneSchemaType>({
		resolver: zodResolver(phoneSchema),
		defaultValues: { phone: "" },
	})

	const otpForm = useForm<OtpSchemaType>({
		resolver: zodResolver(otpSchema),
		defaultValues: { otp: "" },
	})

	const completeForm = useForm<CompleteSchemaType>({
		resolver: zodResolver(completeSchema),
		defaultValues: {
			first_name: "",
			last_name: "",
			password: "",
		},
	})

	// Mutations
	const sendOtpMutation = useMutation({
		mutationFn: AuthService.sendOtp,
		onSuccess: (data) => {
			toast.success("OTP kod jiberildi")
			console.log("OTP for testing:", data.otp)
			setCurrentStep(2)
		},
		onError: (error: ResponseError) => {
			errorCatch(error)
		},
	})

	const verifyOtpMutation = useMutation({
		mutationFn: AuthService.verifyOtp,
		onSuccess: () => {
			toast.success("OTP tastıyıqlandı")
			setCurrentStep(3)
		},
		onError: (error: ResponseError) => {
			errorCatch(error)
		},
	})

	const completeRegistrationMutation = useMutation({
		mutationFn: AuthService.completeRegistration,
		onSuccess: async () => {
			toast.success("Registratsiya tamamlandı!")

			try {
				// fetchQuery сам обновит кэш ["profile"] и вернет результат
				const profile = await queryClient.fetchQuery({
					queryKey: ["profile"],
					queryFn: AuthService.getProfile,
					// Опционально: укажите staleTime: 0, чтобы точно получить свежие данные
					staleTime: 0,
				})

				// Устанавливаем данные (проверьте, нужно ли profile.data или profile.data.data)
				const userData = profile?.data
				setAuthState("authenticated", userData)

				// Редирект только после того, как состояние обновлено
				router.replace("/")
			} catch (error) {
				// Если профиль не загрузился, можно отправить на логин или показать ошибку
				console.error("Ошибка при получении профиля после регистрации:", error)
				router.replace("/login")
			}
		},
		onError: (error: ResponseError) => {
			errorCatch(error)
		},
	})
	// Handlers
	const handlePhoneSubmit = (data: PhoneSchemaType) => {
		setPhone(data.phone)
		sendOtpMutation.mutate({ phone: formatPhone(data.phone) })
	}

	const handleOtpSubmit = (data: OtpSchemaType) => {
		const verifyToken = getVerifyToken()
		if (!verifyToken) return toast.error("Token tabılmadı")
		verifyOtpMutation.mutate({
			otp: data.otp,
			verify_token: verifyToken,
		})
	}

	const handleCompleteSubmit = (data: CompleteSchemaType) => {
		const completeToken = getCompleteToken()
		if (!completeToken) return toast.error("Token tabılmadı")
		completeRegistrationMutation.mutate({
			...data,
			complete_token: completeToken,
		})
	}

	const handleResendOtp = () => {
		if (!phone) return
		sendOtpMutation.mutate({ phone: formatPhone(phone) })
	}

	const handleBack = () => {
		if (currentStep > 1) setCurrentStep(currentStep - 1)
	}

	return {
		currentStep,
		phoneForm,
		otpForm,
		completeForm,
		handlePhoneSubmit: phoneForm.handleSubmit(handlePhoneSubmit),
		handleOtpSubmit: otpForm.handleSubmit(handleOtpSubmit),
		handleCompleteSubmit: completeForm.handleSubmit(handleCompleteSubmit),
		handleResendOtp,
		handleBack,
		isPending:
			sendOtpMutation.isPending ||
			verifyOtpMutation.isPending ||
			completeRegistrationMutation.isPending,
	}
}
