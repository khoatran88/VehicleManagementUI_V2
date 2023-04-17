import { AxiosResponse } from 'axios'
import { api, apiUrl } from 'src/api'
import { AuthType, LoginType } from 'src/types'

export const handleAuth = async ({
  userName,
  password,
}: LoginType): Promise<AxiosResponse<AuthType>> => {
  return api.post<AuthType>(apiUrl.login, {
    userName,
    password,
  })
}
