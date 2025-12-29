"use client"

import Link from "next/link"
import { Controller } from "react-hook-form"
import { PatternFormat } from "react-number-format"

import { PasswordInput } from "@/components/ui"
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

import { useLoginForm } from "./use-login-form"

export const LoginForm = () => {
	const { form, onSubmit, isPending } = useLoginForm()

	return (
		<div className="w-full max-w-100 mx-auto space-y-6">
			<div className="flex flex-col space-y-2 text-center">
				<h1 className="text-2xl font-bold tracking-tight text-foreground">
					Welcome back to Tindy.uz
				</h1>
				<p className="text-sm text-muted-foreground">Login your account</p>
			</div>

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

				<div className="flex items-center justify-between">
					<Link
						href="/forgot-password"
						className="text-sm font-medium text-primary hover:underline"
					>
						Paroldi tiklew
					</Link>
				</div>

				<Button disabled={isPending} type="submit" className="w-full" size="lg">
					{isPending ? "Kiriw..." : "Kiriw"}
				</Button>
			</form>

			<p className="text-center text-sm text-muted-foreground">
				Akkaunt joqpa? Onda{" "}
				<Link
					href="/register"
					className="font-medium text-primary hover:underline"
				>
					Register qılıń
				</Link>
			</p>
		</div>
	)
}
