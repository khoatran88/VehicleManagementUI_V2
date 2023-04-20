export const BASE_URL = `https://192.168.38.82:9300/api`

export const path = (base: string, subLink: string) => `${base}${subLink}`

export const apiUrl = {
  // auth
  login: path(BASE_URL, '/Auth/login'),
}
