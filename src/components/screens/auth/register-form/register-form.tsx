"use client"

import Link from "next/link"

import { CompleteStep } from "./complete-step"
import { OtpStep } from "./otp-step"
import { PhoneStep } from "./phone-step"
import { useRegisterForm } from "./use-register-form"

export const RegisterForm = () => {
	const {
		currentStep,
		phoneForm,
		otpForm,
		completeForm,
		handlePhoneSubmit,
		handleOtpSubmit,
		handleCompleteSubmit,
		handleResendOtp,
		handleBack,
		isPending,
	} = useRegisterForm()

	return (
		<div className="w-full max-w-100 mx-auto space-y-6">
			<div className="flex flex-col space-y-2 text-center">
				<h1 className="text-2xl font-bold tracking-tight text-foreground">
					{currentStep === 1 && "Registratsiyadan ótiń"}
					{currentStep === 2 && "Tastıyıqlaw"}
					{currentStep === 3 && "Maǵlıwmatlardı toldırıń"}
				</h1>
				<p className="text-sm text-muted-foreground">
					{currentStep === 1 && "Platformadan paydalanıw ushın akkaunt jaratıń"}
					{currentStep === 2 && "Telefonıńızǵa jiberilgen kodtı kiritiń"}
					{currentStep === 3 && "Akkauntıńız ushın maǵlıwmatlardı kiritiń"}
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
				<CompleteStep
					form={completeForm}
					onSubmit={handleCompleteSubmit}
					isPending={isPending}
					onBack={handleBack}
				/>
			)}

			{currentStep === 1 && (
				<p className="text-center text-sm text-muted-foreground">
					Akkauntyńız barma? Onda{" "}
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

export default RegisterForm
