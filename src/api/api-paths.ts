export const BASE_URL = `https://localhost:9300/api`

export const path = (base: string, subLink: string) => `${base}${subLink}`

export const apiUrl = {
  // auth
  login: path(BASE_URL, '/Auth/login'),
}
