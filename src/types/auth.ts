export type LoginType = {
  userName: string
  password: string
}

export type AuthTokens = {
  accessToken: string
  refreshToken: string
  success: boolean
}

export type AuthContextState = {
  isLoggedIn: boolean
  user?: UserInfo
  authToken?: string
  refreshToken?: string
}

export type UserInfo = {
  userName?: string
}
