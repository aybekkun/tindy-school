"use client"

import Link from "next/link"

import { NewPasswordStep } from "./new-password-step"
import { OtpStep } from "./otp-step"
import { PhoneStep } from "./phone-step"
import { useResetPasswordForm } from "./use-reset-password-form"

export const ResetPasswordForm = () => {
	const {
		currentStep,
		phoneForm,
		otpForm,
		newPasswordForm,
		handlePhoneSubmit,
		handleOtpSubmit,
		handleNewPasswordSubmit,
		handleResendOtp,
		handleBack,
		isPending,
	} = useResetPasswordForm()

	return (
		<div className="w-full max-w-100 mx-auto space-y-6">
			<div className="flex flex-col space-y-2 text-center">
				<h1 className="text-2xl font-bold tracking-tight text-foreground">
					{currentStep === 1 && "Paroldi tiklew"}
					{currentStep === 2 && "Tastıyıqlaw"}
					{currentStep === 3 && "Jańa parol"}
				</h1>
				<p className="text-sm text-muted-foreground">
					{currentStep === 1 && "Telefon nomerińizdi kiritiń"}
					{currentStep === 2 && "Telefonıńızǵa jiberilgen kodtı kiritiń"}
					{currentStep === 3 && "Akkauntıńız ushın jańa parol kiritiń"}
				</p>
			</div>

			{currentStep === 1 && (
				<PhoneStep
					form={phoneForm}
					onSubmit={handlePhoneSubmit}
					isPending={isPending}
				/>
			)}

			{currentStep === 2 && (
				<OtpStep
					form={otpForm}
					onSubmit={handleOtpSubmit}
					isPending={isPending}
					onBack={handleBack}
					onResendOtp={handleResendOtp}
				/>
			)}

			{currentStep === 3 && (
				<NewPasswordStep
					form={newPasswordForm}
					onSubmit={handleNewPasswordSubmit}
					isPending={isPending}
					onBack={handleBack}
				/>
			)}

			{currentStep === 1 && (
				<p className="text-center text-sm text-muted-foreground">
					Esledińizbe? Onda{" "}
					<Link
						href="/login"
						className="font-medium text-primary hover:underline"
					>
						Kiriń
					</Link>
				</p>
			)}
		</div>
	)
}
