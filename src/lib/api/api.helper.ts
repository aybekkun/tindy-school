import Cookies from "js-cookie"



const TOKEN_VARIANTS = {
    verify_token: "verify_token",
    complete_token: "complete_token",
    access_token: "access_token",
    refresh_token: "refresh_token",
}

export const getAccessToken = () => {
    const accessToken = Cookies.get(TOKEN_VARIANTS.access_token)
    return accessToken || null
}
export const getRefreshToken = () => {
    const refreshToken = Cookies.get(TOKEN_VARIANTS.refresh_token)
    return refreshToken || null
}
export const getVerifyToken = () => {
    const verifyToken = Cookies.get(TOKEN_VARIANTS.verify_token)
    return verifyToken || null
}

export const getCompleteToken = () => {
    const completeToken = Cookies.get(TOKEN_VARIANTS.complete_token)
    return completeToken || null
}

export const setAccessToken = (accessToken: string) => {
    Cookies.set(TOKEN_VARIANTS.access_token, accessToken, {
        expires: 1, // 1 день
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    })
}

export const setRefreshToken = (refreshToken: string) => {
    Cookies.set(TOKEN_VARIANTS.refresh_token, refreshToken, {
        expires: 1, // 1 день
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    })
}
export const setVerifyToken = (verifyToken: string) => {
    Cookies.set(TOKEN_VARIANTS.verify_token, verifyToken, {
        expires: 1 / 144, // 10 минут
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    })
}

export const setCompleteToken = (completeToken: string) => {
    Cookies.set(TOKEN_VARIANTS.complete_token, completeToken, {
        expires: 1 / 144, // 10 минут
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    })
}

export const removeAllTokens = () => {
    Object.values(TOKEN_VARIANTS).forEach((tokenName) => {
        Cookies.remove(tokenName)
    })
}
