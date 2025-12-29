import { removeAllTokens } from "@/lib/api"
import { IUserProfile } from "@/services/auth"
import { create } from "zustand"
import { devtools } from "zustand/middleware"

export type AuthState = {
	isAuth: boolean
	user: IUserProfile | null
	status: "authenticated" | "unauthenticated" | "loading"
	setAuthState: (status: AuthState["status"], user: IUserProfile | null) => void
	logout: () => void
}

export const useAuthStore = create<AuthState>()(
	devtools(
		(set) => ({
			isAuth: false,
			user: null,
			status: "loading",
			setAuthState: (status, user) => {
				if (status === "unauthenticated") {
					set(
						{
							isAuth: false,
							user: null,
							status: "unauthenticated",
						},
						false,
						"auth/setUnauthenticated"
					)
				} else if (status === "authenticated") {
					set(
						{
							isAuth: true,
							user,
							status: "authenticated",
						},
						false,
						"auth/setAuthenticated"
					)
				} else {
					set({ status: "loading" }, false, "auth/loading")
				}
			},

			logout: () => {
				set(
					{
						isAuth: false,
						user: null,
						status: "unauthenticated",
					},
					false,
					"auth/logout"
				)
				removeAllTokens()
			},
		}),
		{ name: "AuthStore" }
	)
)
