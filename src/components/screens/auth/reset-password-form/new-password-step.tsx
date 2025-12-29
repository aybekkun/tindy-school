"use client"

import { Controller, UseFormReturn } from "react-hook-form"

import { PasswordInput } from "@/components/ui"
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { cn } from "@/lib/utils"
import { NewPasswordSchemaType } from "./use-reset-password-form"

interface NewPasswordStepProps {
	form: UseFormReturn<NewPasswordSchemaType>
	onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>
	isPending: boolean
	onBack: () => void
}

export const NewPasswordStep = ({
	form,
	onSubmit,
	isPending,
	onBack,
}: NewPasswordStepProps) => {
	return (
		<form onSubmit={onSubmit} className="space-y-4">
			<Controller
				control={form.control}
				name="password"
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel>JAŃA PAROL</FieldLabel>
						<PasswordInput
							placeholder="••••••••"
							{...field}
							className={cn(fieldState.invalid && "border-destructive")}
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				control={form.control}
				name="confirmPassword"
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel>PAROLDI TASTIYIQLAW</FieldLabel>
						<PasswordInput
							placeholder="••••••••"
							{...field}
							className={cn(fieldState.invalid && "border-destructive")}
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<div className="flex flex-col gap-2 pt-2">
				<Button disabled={isPending} type="submit" className="w-full" size="lg">
					{isPending ? "Jańalanbaqta..." : "Paroldi jańalaw"}
				</Button>
				<Button
					variant={"ghost"}
					type="button"
					onClick={onBack}
					disabled={isPending}
					className="w-full"
				>
					Artqa
				</Button>
			</div>
		</form>
	)
}
