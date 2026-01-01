"use client"

import { Container } from "@/components/ui"
import { AvatarForm } from "./avatar-form"
import { ChangePasswordForm } from "./change-password-form"
import { PersonalInfoForm } from "./personal-info-form"

export const SettingsPage = () => {
	return (
		<Container className="py-10 max-w-3xl space-y-8">
			<div className="space-y-2">
				<h1 className="text-3xl font-bold tracking-tight">Profil sazlawları</h1>
				<p className="text-muted-foreground">
					Akkauntıńızdı hám jeke maǵlıwmatlarıńızdı basqarıń
				</p>
			</div>

			<div className="grid gap-8">
				<AvatarForm />
				<PersonalInfoForm />
				<ChangePasswordForm />
			</div>
		</Container>
	)
}
