import { AxiosError, AxiosResponse } from 'axios'
import { useMutation, useQueryClient } from 'react-query'
import { handleAuth } from 'src/api/routes'
import { queryKeys } from 'src/api/query-keys'
import { LoginType } from 'src/types'

export const useSignIn = () => {
  const queryClient = useQueryClient()
  return useMutation<AxiosResponse, AxiosError<any>, LoginType, unknown>(
    handleAuth,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKeys.loginToken)
      },
    }
  )
}
