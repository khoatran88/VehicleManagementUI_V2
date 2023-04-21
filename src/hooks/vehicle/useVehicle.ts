import { useQuery } from 'react-query'
import { queryKeys } from 'src/api/query-keys'
import { getVehicleById } from 'src/api/routes'

export default function useVehicle() {
  return {
    ...useQuery([queryKeys.getVehicle], () => getVehicleById(), {}),
  }
}
