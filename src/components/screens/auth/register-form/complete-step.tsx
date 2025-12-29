"use client"

import { Controller, UseFormReturn } from "react-hook-form"

import { PasswordInput } from "@/components/ui"
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { CompleteSchemaType } from "./use-register-form"

interface CompleteStepProps {
	form: UseFormReturn<CompleteSchemaType>
	onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>
	isPending: boolean
	onBack: () => void
}

export const CompleteStep = ({
	form,
	onSubmit,
	isPending,
	onBack,
}: CompleteStepProps) => {
	return (
		<form onSubmit={onSubmit} className="space-y-4">
			<Controller
				control={form.control}
				name="first_name"
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel>ATÍŃÍZ</FieldLabel>
						<Input
							placeholder="Atıńızdı kiritiń"
							{...field}
							className={cn(fieldState.invalid && "border-destructive")}
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>
			<Controller
				control={form.control}
				name="last_name"
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel>FAMILIYAŃÍZ</FieldLabel>
						<Input
							placeholder="Familiyańızdı kiritiń"
							{...field}
							className={cn(fieldState.invalid && "border-destructive")}
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>
			<Controller
				control={form.control}
				name="password"
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel>PAROL</FieldLabel>
						<PasswordInput
							placeholder="••••••••"
							{...field}
							className={cn(fieldState.invalid && "border-destructive")}
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>
			<div className="flex flex-col gap-2">
				<Button disabled={isPending} type="submit" className="w-full" size="lg">
					{isPending ? "Jaratılmaqta..." : "Akkaunttı jaratıw"}
				</Button>
				<button
					type="button"
					onClick={onBack}
					className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 w-fit"
				>
					Artqa
				</button>
			</div>
		</form>
	)
}
