/* import { authService } from "@/features/auth/api"
 */
import type { InternalAxiosRequestConfig } from "axios"
import axios from "axios"
import { _API_URL } from "./url.config"
import { getAccessToken } from "./api.helper"

const $authHost = axios.create({
	baseURL: _API_URL,
	/*     withCredentials: true, */
})

$authHost.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	const token = getAccessToken()

	config.headers.Authorization = `Bearer ${token ?? ""}`

	return config
})
/* $authHost.interceptors.response.use(
    (config) => config,
    async (error) => {
        const originalRequest = error.config

        if (error?.response?.status === 401 && !originalRequest._isRetry) {
            originalRequest._isRetry = true

            try {
                const { access } = await authService.refreshToken()

                // Обновить токен в заголовках
                $authHost.defaults.headers.Authorization = `Bearer ${access}`
                originalRequest.headers.Authorization = `Bearer ${access}`

                // Повторить оригинальный запрос с новым токеном
                return $authHost(originalRequest)
            } catch (e) {
                authService.logout()
            }
        }

        return Promise.reject(error)
    }
) */

const $host = axios.create({
	baseURL: _API_URL,
	/*     withCredentials: true, */
})

export { $authHost, $host }
