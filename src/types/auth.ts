export type LoginType = {
  userName: string
  password: string
}
export type AuthType = {
  accessToken: string
  refreshToken: string
  success: boolean
}

export interface AuthContextState {
  isLoggedIn: boolean
}
