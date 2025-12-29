"use client"

import { Controller, UseFormReturn } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp"
import { OtpSchemaType } from "./use-register-form"

interface OtpStepProps {
	form: UseFormReturn<OtpSchemaType>
	onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>
	isPending: boolean
	onBack: () => void
	onResendOtp: () => void
}

export const OtpStep = ({
	form,
	onSubmit,
	isPending,
	onBack,
	onResendOtp,
}: OtpStepProps) => {
	return (
		<form onSubmit={onSubmit} className="space-y-6">
			<Controller
				control={form.control}
				name="otp"
				render={({ field, fieldState }) => (
					<Field
						data-invalid={fieldState.invalid}
						className="flex flex-col items-center"
					>
						<FieldLabel className="w-full text-center uppercase">
							6 sanlı KOD
						</FieldLabel>
						<InputOTP maxLength={6} className="w-full" {...field}>
							<InputOTPGroup className="w-full">
								<InputOTPSlot index={0} className="w-full" />
								<InputOTPSlot index={1} className="w-full" />
								<InputOTPSlot index={2} className="w-full" />
								<InputOTPSlot index={3} className="w-full" />
								<InputOTPSlot index={4} className="w-full" />
								<InputOTPSlot index={5} className="w-full" />
							</InputOTPGroup>
						</InputOTP>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>
			<div className="flex flex-col gap-2">
				<Button disabled={isPending} type="submit" className="w-full" size="lg">
					{isPending ? "Tastıyıqlanbaqta..." : "Tastıyıqlaw"}
				</Button>
				<div className="flex justify-between items-center text-sm">
					<Button variant={"ghost"} type="button" onClick={onBack}>
						Artqa
					</Button>
					<Button variant={"ghost"} type="button" onClick={onResendOtp}>
						Kodtı qayta jiberiw
					</Button>
				</div>
			</div>
		</form>
	)
}
