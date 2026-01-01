export interface IUserProfile {
	id: number
	first_name: string
	last_name: string
	phone: string
	full_name: string
	role: {
		id: number
		name: string
	}
	bio: string
	avatar?: string | null
	is_verified: boolean
}
export interface ISentOtpResponse {
	message: string
	otp: string
	verify_token: string
}

export interface IVerifyOtpResponse {
	message: string
	complete_token: string
}

export interface ICompleteRegistrationResponse extends ILoginResponse {
	message: string
}

export interface ITokenRefresh {
	access: string
}
export interface ILoginResponse {
	data: {
		id: number
		phone: string
		first_name: string
		last_name: string
		token: string
	}
}

export interface ISendOtpRequest {
	phone: string
}

export interface IVerifyOtpRequest {
	otp: string
	verify_token: string
}

export interface ICompleteRegistrationRequest {
	first_name: string
	last_name: string
	password: string
	complete_token: string
}

export interface IRefreshTokenRequest {
	refresh: string
}

export interface ILoginRequest {
	phone: string
	password: string
}

export interface IUserProfileResponse {
	message: string
	data: IUserProfile
}

export interface IResetPasswordRequest {
	phone: string
}

export interface IResetPasswordResponse {
	message: string
	otp: string
	verify_token: string
}

export interface IResetVerifyRequest {
	otp: string
	verify_token: string
}

export interface IResetVerifyResponse {
	message: string
	complete_token: string
}

export interface INewPasswordRequest {
	new_password: string
	complete_token: string
}

export interface INewPasswordResponse {
	message: string
}

export interface IUpdateProfileRequest {
	first_name?: string
	last_name?: string
	bio?: string
}

export interface IChangePasswordRequest {
	old_password?: string
	password?: string
}

export interface IProfileUpdateResponse {
	message: string
	data: IUserProfile
}
