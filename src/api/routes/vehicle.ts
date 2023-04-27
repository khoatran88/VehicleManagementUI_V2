import { Vehicle } from 'src/types'
import { api } from '../axios-base-instance'
import { apiUrl } from '../api-paths'

export const getVehicleById = async () => {
  const { data } = await api.get<Vehicle>(apiUrl.vehicle.getVehicleDetail)
  return data
}
