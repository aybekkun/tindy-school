"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
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
	Input,
	Textarea,
} from "@/components/ui"
import { cn } from "@/lib/utils"
import { useProfileQuery, useUpdateProfile } from "@/services/auth/auth.api"

const personalInfoSchema = z.object({
	first_name: z.string().min(2, "Atı keminde 2 belgiden ibarat bolıwı kerek"),
	last_name: z
		.string()
		.min(2, "Familiyası keminde 2 belgiden ibarat bolıwı kerek"),
	bio: z.string().optional(),
})

type PersonalInfoSchemaType = z.infer<typeof personalInfoSchema>

export const PersonalInfoForm = () => {
	const { data: profile } = useProfileQuery()
	const { mutate: updateProfile, isPending } = useUpdateProfile()

	const form = useForm<PersonalInfoSchemaType>({
		resolver: zodResolver(personalInfoSchema),
		defaultValues: {
			first_name: "",
			last_name: "",
			bio: "",
		},
	})

	useEffect(() => {
		if (profile?.data) {
			form.reset({
				first_name: profile.data.first_name || "",
				last_name: profile.data.last_name || "",
				bio: profile.data.bio || "",
			})
		}
	}, [profile, form])

	const onSubmit = (data: PersonalInfoSchemaType) => {
		updateProfile(data, {
			onSuccess: () => {
				toast.success("Maǵlıwmatlar tabıslı jańalandı")
			},
		})
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Jeke maǵlıwmatlar</CardTitle>
				<CardDescription>
					Atıńızdı, familiyańızdı hám ózińiz haqqındaǵı maǵlıwmatlardı jańalań
				</CardDescription>
			</CardHeader>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<CardContent className="space-y-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<Controller
							control={form.control}
							name="first_name"
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel>ATI</FieldLabel>
									<Input
										placeholder="Azamat"
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
							name="last_name"
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel>FAMILIYASI</FieldLabel>
									<Input
										placeholder="Abdukarimov"
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

					<Controller
						control={form.control}
						name="bio"
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel>ÓZI HAQQINDA</FieldLabel>
								<Textarea
									placeholder="Ózińiz haqqında azmaz jazıń..."
									className={cn(
										"min-h-25 resize-none",
										fieldState.invalid && "border-destructive"
									)}
									{...field}
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
				</CardContent>
				<CardFooter className="border-t px-6 py-4">
					<Button type="submit" disabled={isPending}>
						{isPending ? "Saqlanbaqta..." : "Ózgerislerdi saqlaw"}
					</Button>
				</CardFooter>
			</form>
		</Card>
	)
}
