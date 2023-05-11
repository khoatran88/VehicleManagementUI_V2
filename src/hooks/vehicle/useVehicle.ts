import { useMutation, useQueryClient } from 'react-query'
import { queryKeysVehicle } from 'src/api/query-keys'

export const useVehicle = () => {
  const queryClient = useQueryClient()
  return useMutation(
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKeysVehicle.addVehicles)
      },
    }
  )
}
