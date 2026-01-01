"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Field,
	FieldError,
	FieldLabel,
	PasswordInput,
} from "@/components/ui"
import { cn } from "@/lib/utils"
import { useUpdateProfile } from "@/services/auth/auth.api"

const changePasswordSchema = z
	.object({
		old_password: z.string().min(1, "Házirgi paroldi kiritiń"),
		password: z
			.string()
			.min(6, "Jańa parol keminde 6 belgiden ibarat bolıwı kerek"),
		confirm_password: z.string().min(1, "Jańa paroldi tastıyıqlań"),
	})
	.refine((data) => data.password === data.confirm_password, {
		message: "Parollar sáykes kelmedi",
		path: ["confirm_password"],
	})

type ChangePasswordSchemaType = z.infer<typeof changePasswordSchema>

export const ChangePasswordForm = () => {
	const { mutate: updateProfile, isPending } = useUpdateProfile()

	const form = useForm<ChangePasswordSchemaType>({
		resolver: zodResolver(changePasswordSchema),
		defaultValues: {
			old_password: "",
			password: "",
			confirm_password: "",
		},
	})

	const onSubmit = (data: ChangePasswordSchemaType) => {
		updateProfile(
			{
				old_password: data.old_password,
				password: data.password,
			},
			{
				onSuccess: () => {
					toast.success("Parol tabıslı ózgertildi")
					form.reset()
				},
			}
		)
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Paroldi ózgertiw</CardTitle>
				<CardDescription>
					Qáwipsizlik ushın háripler, sanlar hám belgilerden ibarat quramalı
					paroldan paydalanıń
				</CardDescription>
			</CardHeader>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<CardContent className="space-y-4">
					<Controller
						control={form.control}
						name="old_password"
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel>HÁZIRGI PAROL</FieldLabel>
								<PasswordInput
									placeholder="••••••••"
									{...field}
									className={cn(fieldState.invalid && "border-destructive")}
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>
						<Controller
							control={form.control}
							name="confirm_password"
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel>PAROLDI TASTIYIQLAW</FieldLabel>
									<PasswordInput
										placeholder="••••••••"
										{...field}
										className={cn(fieldState.invalid && "border-destructive")}
									/>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>
					</div>
				</CardContent>
				<CardFooter className="border-t px-6 py-4">
					<Button type="submit" disabled={isPending}>
						{isPending ? "Saqlanbaqta..." : "Paroldi jańalaw"}
					</Button>
				</CardFooter>
			</form>
		</Card>
	)
}
