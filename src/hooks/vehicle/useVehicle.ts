import { useQuery } from 'react-query'
import { queryKeys, queryKeysVehicle } from 'src/api/query-keys'
import * as VehicleActions from 'src/api/routes'

export function useVehicle() {
  return {
    ...useQuery([queryKeys.getVehicle], () => VehicleActions.getVehicleById(), {}),
  }
}