import {
	$authHost,
	$host,
	getRefreshToken,
	removeAllTokens,
	setAccessToken,
	setCompleteToken,
	setVerifyToken,
} from "@/lib/api"
import {
	ICompleteRegistrationRequest,
	ICompleteRegistrationResponse,
	ILoginRequest,
	ILoginResponse,
	INewPasswordRequest,
	INewPasswordResponse,
	IResetPasswordRequest,
	IResetPasswordResponse,
	IResetVerifyRequest,
	IResetVerifyResponse,
	ISendOtpRequest,
	ISentOtpResponse,
	ITokenRefresh,
	IUserProfileResponse,
	IVerifyOtpRequest,
	IVerifyOtpResponse,
} from "./auth.types"

export const AuthService = {
	sendOtp: async (formData: ISendOtpRequest) => {
		const res = await $host.post<ISentOtpResponse>("/sent-otp", formData)
		if (res.data.verify_token) setVerifyToken(res.data.verify_token)
		return res.data
	},
	verifyOtp: async (formData: IVerifyOtpRequest) => {
		const res = await $host.post<IVerifyOtpResponse>("/verify-otp", formData)
		if (res.data.complete_token) setCompleteToken(res.data.complete_token)
		return res.data
	},
	completeRegistration: async (data: ICompleteRegistrationRequest) => {
		const res = await $host.post<ICompleteRegistrationResponse>(
			"/complete-registration",
			data
		)
		if (res.data.data.token) setAccessToken(res.data.data.token)
		return res.data
	},
	refreshToken: async () => {
		const res = await $host.post<ITokenRefresh>("/token/refresh", {
			refresh: getRefreshToken(),
		})
		if (res.data.access) setAccessToken(res.data.access)
		return res.data
	},
	login: async (data: ILoginRequest) => {
		const res = await $host.post<ILoginResponse>("/login", data)
		if (res.data.data.token) setAccessToken(res.data.data.token)
		return res.data
	},
	getProfile: async () => {
		const { data } = await $authHost.get<IUserProfileResponse>("/profile")
		return data
	},
	resetPassword: async (formData: IResetPasswordRequest) => {
		const res = await $host.post<IResetPasswordResponse>(
			"/reset-password",
			formData
		)
		if (res.data.verify_token) setVerifyToken(res.data.verify_token)
		return res.data
	},
	resetVerify: async (formData: IResetVerifyRequest) => {
		const res = await $host.post<IResetVerifyResponse>(
			"/reset-verify",
			formData
		)
		if (res.data.complete_token) setCompleteToken(res.data.complete_token)
		return res.data
	},
	newPassword: async (data: INewPasswordRequest) => {
		const res = await $host.post<INewPasswordResponse>("/new-password", data)
		return res.data
	},
	logout: () => {
		removeAllTokens()
	},
}
