import { ResponseError } from "@/lib/api"
import { errorCatch } from "@/lib/api/api.error"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { AuthService } from "./auth.service"

export const useSendOtp = () => {
	return useMutation({
		mutationFn: AuthService.sendOtp,
		onSuccess: (data) => {
			console.log("OTP отправлен успешно:", data)
		},
		onError: (error: ResponseError) => {
			errorCatch(error)
		},
	})
}

export const useVerifyOtp = () => {
	return useMutation({
		mutationFn: AuthService.verifyOtp,
		onSuccess: (data) => {
			console.log("OTP верифицирован успешно:", data)
		},
		onError: (error: ResponseError) => {
			errorCatch(error)
		},
	})
}

export const useCompleteRegistration = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: AuthService.completeRegistration,
		onSuccess: (data) => {
			console.log("Регистрация завершена успешно:", data)
			queryClient.refetchQueries({ queryKey: ["profile"] })
		},
		onError: (error: ResponseError) => {
			errorCatch(error)
		},
	})
}

export const useLogin = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: AuthService.login,
		onSuccess: () => {
			queryClient.refetchQueries({ queryKey: ["profile"] })
		},
		onError: (error: ResponseError) => {
			errorCatch(error)
		},
	})
}

export const useProfileQuery = (options?: { enabled?: boolean }) => {
	return useQuery({
		queryKey: ["profile"],
		queryFn: AuthService.getProfile,
		staleTime: Infinity,
		retry: 0,
		...options,
	})
}

export const useResetPassword = () => {
	return useMutation({
		mutationFn: AuthService.resetPassword,
		onSuccess: (data) => {
			console.log("Reset password OTP отправлен успешно:", data)
		},
		onError: (error: ResponseError) => {
			errorCatch(error)
		},
	})
}

export const useResetVerify = () => {
	return useMutation({
		mutationFn: AuthService.resetVerify,
		onSuccess: (data) => {
			console.log("Reset OTP верифицирован успешно:", data)
		},
		onError: (error: ResponseError) => {
			errorCatch(error)
		},
	})
}

export const useNewPassword = () => {
	return useMutation({
		mutationFn: AuthService.newPassword,
		onSuccess: (data) => {
			console.log("Пароль успешно изменен:", data)
		},
		onError: (error: ResponseError) => {
			errorCatch(error)
		},
	})
}

export const useUpdateProfile = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: AuthService.updateProfile,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["profile"] })
		},
		onError: (error: ResponseError) => {
			errorCatch(error)
		},
	})
}

export const useUpdateAvatar = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: AuthService.updateAvatar,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["profile"] })
		},
		onError: (error: ResponseError) => {
			errorCatch(error)
		},
	})
}
