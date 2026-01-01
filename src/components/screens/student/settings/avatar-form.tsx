"use client"

import { Camera, Loader2, User } from "lucide-react"
import { useRef, useState } from "react"
import { toast } from "sonner"

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui"
import { useProfileQuery, useUpdateAvatar } from "@/services/auth/auth.api"

export const AvatarForm = () => {
	const { data: profile } = useProfileQuery()
	const { mutate: updateAvatar, isPending } = useUpdateAvatar()
	const fileInputRef = useRef<HTMLInputElement>(null)
	const [preview, setPreview] = useState<string | null>(null)

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			if (file.size > 2 * 1024 * 1024) {
				toast.error("Fayl ólshemi 2 MB-dan aspawı kerek")
				return
			}

			const reader = new FileReader()
			reader.onloadend = () => {
				setPreview(reader.result as string)
			}
			reader.readAsDataURL(file)

			updateAvatar(file, {
				onSuccess: () => {
					toast.success("Profil súwreti tabıslı jańalandı")
					setPreview(null)
				},
				onError: () => {
					setPreview(null)
				},
			})
		}
	}

	const triggerFileInput = () => {
		fileInputRef.current?.click()
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Profil súwreti</CardTitle>
				<CardDescription>
					Súwretińiz profilde hám kommentariyalarda kórinetuǵın boladı
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col items-center sm:flex-row gap-6">
					<div className="relative group">
						<Avatar className="h-24 w-24 border-2 border-muted transition-colors group-hover:border-primary/50">
							<AvatarImage
								src={
									preview ||
									profile?.data.avatar ||
									"https://github.com/shadcn.png"
								}
								alt={profile?.data.full_name}
								className="object-cover"
							/>
							<AvatarFallback className="bg-muted text-muted-foreground">
								<User className="h-10 w-10 text-muted-foreground/60" />
							</AvatarFallback>
						</Avatar>
						<button
							onClick={triggerFileInput}
							disabled={isPending}
							className="absolute inset-0 flex items-center justify-center bg-black/40 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
							type="button"
						>
							{isPending ? (
								<Loader2 className="h-6 w-6 animate-spin" />
							) : (
								<Camera className="h-6 w-6" />
							)}
						</button>
					</div>

					<div className="flex flex-col gap-3 items-center sm:items-start">
						<div className="space-y-1 text-center sm:text-left">
							<p className="text-sm font-medium">Jańa súwret tańlań</p>
							<p className="text-xs text-muted-foreground">
								JPG, PNG yamasa GIF. Maksimal ólshemi 2 MB.
							</p>
						</div>
						<Button
							variant="outline"
							size="sm"
							onClick={triggerFileInput}
							disabled={isPending}
							className="relative"
						>
							{isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
							Súwretti ózgertiw
							<input
								type="file"
								className="hidden"
								ref={fileInputRef}
								onChange={handleFileChange}
								accept="image/*"
							/>
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
