"use client"

import { Controller, UseFormReturn } from "react-hook-form"
import { PatternFormat } from "react-number-format"

import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { PhoneSchemaType } from "./use-register-form"

interface PhoneStepProps {
	form: UseFormReturn<PhoneSchemaType>
	onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>
	isPending: boolean
}

export const PhoneStep = ({ form, onSubmit, isPending }: PhoneStepProps) => {
	return (
		<form onSubmit={onSubmit} className="space-y-4">
			<Controller
				control={form.control}
				name="phone"
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel>TELEFON</FieldLabel>
						<PatternFormat
							format="+998 ## ### ## ##"
							placeholder="+998 ## ### ## ##"
							autoComplete="tel"
							allowEmptyFormatting={true}
							customInput={Input}
							{...field}
							onValueChange={(values) => {
								field.onChange(values.formattedValue)
							}}
							className={cn(fieldState.invalid && "border-destructive")}
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>
			<Button disabled={isPending} type="submit" className="w-full" size="lg">
				{isPending ? "Jiberilmekte..." : "OTP kodtı alıw"}
			</Button>
		</form>
	)
}
