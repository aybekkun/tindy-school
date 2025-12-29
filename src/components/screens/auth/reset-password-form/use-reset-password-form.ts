"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
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

// Schemas
const phoneSchema = z.object({
	phone: z.string().min(17, { message: "Telefon nomeri tolıq kiritilsin" }),
})

const otpSchema = z.object({
	otp: z.string().min(6, { message: "OTP kod 6 sannan ibarat bolıwı kerek" }),
})

const newPasswordSchema = z
	.object({
		password: z
			.string()
			.min(6, { message: "Parol keminde 6 simvoldan ibarat bolıwı kerek" }),
		confirmPassword: z.string().min(6, { message: "Paroldi tastıyıqlan" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Parollar bir-birine sáykes emes",
		path: ["confirmPassword"],
	})

export type PhoneSchemaType = z.infer<typeof phoneSchema>
export type OtpSchemaType = z.infer<typeof otpSchema>
export type NewPasswordSchemaType = z.infer<typeof newPasswordSchema>

export const useResetPasswordForm = () => {
	const router = useRouter()
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

	const newPasswordForm = useForm<NewPasswordSchemaType>({
		resolver: zodResolver(newPasswordSchema),
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	})

	// Mutations
	const resetPasswordMutation = useMutation({
		mutationFn: AuthService.resetPassword,
		onSuccess: (data) => {
			toast.success("OTP kod jiberildi")
			console.log("OTP for testing reset:", data.otp)
			setCurrentStep(2)
		},
		onError: (error: ResponseError) => {
			errorCatch(error)
		},
	})

	const resetVerifyMutation = useMutation({
		mutationFn: AuthService.resetVerify,
		onSuccess: () => {
			toast.success("OTP tastıyıqlandı")
			setCurrentStep(3)
		},
		onError: (error: ResponseError) => {
			errorCatch(error)
		},
	})

	const newPasswordMutation = useMutation({
		mutationFn: AuthService.newPassword,
		onSuccess: () => {
			toast.success("Parol jańalandı!")
			router.replace("/login")
		},
		onError: (error: ResponseError) => {
			errorCatch(error)
		},
	})

	// Handlers
	const handlePhoneSubmit = (data: PhoneSchemaType) => {
		setPhone(data.phone)
		resetPasswordMutation.mutate({ phone: formatPhone(data.phone) })
	}

	const handleOtpSubmit = (data: OtpSchemaType) => {
		const verifyToken = getVerifyToken()
		if (!verifyToken) return toast.error("Token tabılmadı")
		resetVerifyMutation.mutate({
			otp: data.otp,
			verify_token: verifyToken,
		})
	}

	const handleNewPasswordSubmit = (data: NewPasswordSchemaType) => {
		const completeToken = getCompleteToken()
		if (!completeToken) return toast.error("Token tabılmadı")
		newPasswordMutation.mutate({
			new_password: data.password,
			complete_token: completeToken,
		})
	}

	const handleResendOtp = () => {
		if (!phone) return
		resetPasswordMutation.mutate({ phone: formatPhone(phone) })
	}

	const handleBack = () => {
		if (currentStep > 1) setCurrentStep(currentStep - 1)
	}

	return {
		currentStep,
		phoneForm,
		otpForm,
		newPasswordForm,
		handlePhoneSubmit: phoneForm.handleSubmit(handlePhoneSubmit),
		handleOtpSubmit: otpForm.handleSubmit(handleOtpSubmit),
		handleNewPasswordSubmit: newPasswordForm.handleSubmit(
			handleNewPasswordSubmit
		),
		handleResendOtp,
		handleBack,
		isPending:
			resetPasswordMutation.isPending ||
			resetVerifyMutation.isPending ||
			newPasswordMutation.isPending,
	}
}
