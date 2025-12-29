export const formatPriceUZS = <T>(value?: T): string => {
    if (value === undefined || isNaN(Number(value))) {
        return "0"
    }
    return Intl.NumberFormat("ru-RU", {}).format(Number(value)) + " UZS"
}

export const formatPhone = (phone?: string) => {
    if (phone === undefined) return "-"
    if (phone.startsWith("+998")) {
        return phone.replace(/ /g, "")
    }
    return "+998" + phone.replace(/ /g, "")
}
