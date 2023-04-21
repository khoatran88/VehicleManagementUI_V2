import { api, apiUrl } from 'src/api'

export const getVehicleById = async () => {
  await api.get(apiUrl.vehicle.getVehicleDetail).then((response) => {
    if (response) {
      return response.data.data.json()
    }
    return {}
  })
}
