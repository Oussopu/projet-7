export const normalizeStr = (str) => {
    return str.toLowerCase().trim().normalize("NFD").replace(/\p{Diacritic}/gu, "")
}
