import { AxiosResponse } from 'axios'
import { api, apiUrl } from 'src/api'
import { Vehicle } from 'src/types'

export const getVehicleById = async (): Promise<AxiosResponse<Vehicle>> => {
  return api.get<Vehicle>(apiUrl.vehicle.getVehicleDetail)
}
