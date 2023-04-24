import { AxiosResponse } from 'axios'
import { api, apiUrl } from 'src/api'
import { AuthTokens, LoginType } from 'src/types'

export const handleAuth = async ({
  userName,
  password,
}: LoginType): Promise<AxiosResponse<AuthTokens>> => {
  return api.post<AuthTokens>(apiUrl.login, {
    userName,
    password,
  })
}
