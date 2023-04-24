import { VehicleVM } from 'src/types'
import { api } from '../axios-base-instance'
import { apiUrl } from '../api-paths'
import { PagedResponse } from 'src/types/response'

export default function GetVehicle() {
  const vehicle: VehicleVM = {
    plateNumber: '51L-2323.5',
    brand: 'Toyotas',
    model: 'Innova',
    engineNumber: '134KPKK234234',
    chassisNumber: 'FGW6321EHN3',
    color: 'Yellow',
    type: '9 Seat',
    productionYear: 2017,
    productionCountry: 'Japan',
    lifetimeLimitTo: 2037,
  }
  return vehicle
}

export const fetchVehicles = async (PageNumber: number, PageSize: number): Promise<PagedResponse> => {
  let data: PagedResponse = {}
  await api.get(`${apiUrl.vehicle.getVehicles}?PageNumber=${PageNumber}&PageSize=${PageSize}`)
    .then((response) => {
      if (response.status) data = response.data;
    })
  return data;
}

export const fetchDetail = async (id: string): Promise<VehicleVM> => {
  let data: VehicleVM = {}
  await api.get(`${apiUrl.vehicle.getVehicleDetail}?${id}`)
    .then((response) => {
      if (response) {
        data = response.data;
      }
    })
  return data;
}

export const getVehicleById = async () => {
  const { data } = await api.get(apiUrl.vehicle.getVehicleDetail)

  return data.data
}
