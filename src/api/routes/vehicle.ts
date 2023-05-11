import { AuthTokens, VehicleVM } from 'src/types'
import { api } from '../axios-base-instance'
import { apiUrl } from '../api-paths'
import { PagedResponse, Response } from 'src/types/response'
import { AxiosResponse } from 'axios'

export const fetchVehicles = async (
  PageNumber: number,
  PageSize: number
): Promise<PagedResponse> => {
  let data: PagedResponse = {}
  await api
    .get(
      `${apiUrl.vehicle.getVehicles}?PageNumber=${PageNumber}&PageSize=${PageSize}`
    )
    .then((response) => {
      if (response.status) data = response.data
    })
  return data
}

export const fetchDetail = async (id: string): Promise<Response> => {
  let data: Response = {}
  await api
    .get(`${apiUrl.vehicle.getVehicleDetail}?vehicleId=${id}`)
    .then((response) => {
      if (response) {
        data = response.data
      }
    })
  return data
}

export const createAndEditVehicle = async (vehicle: VehicleVM): Promise<Response> => {
  let data: Response = {}
  if(!vehicle.id){
    await api.post(apiUrl.vehicle.createVehicle, vehicle)
             .then((response) => {
               if (response) {
              }
              })
  } else {
    await api.put(apiUrl.vehicle.editVehicle, vehicle)
             .then((response) => {
                if (response) {
              }
              })
  }
  return data
}

