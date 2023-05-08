import { useMutation, useQueryClient } from 'react-query'
import { fetchCreateVehicle } from 'src/api/routes'
import { queryKeysVehicle } from 'src/api/query-keys'

export const useVehicle = () => {
  const queryClient = useQueryClient()
  return useMutation(
    fetchCreateVehicle,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKeysVehicle.addVehicles)
      },
    }
  )
}
