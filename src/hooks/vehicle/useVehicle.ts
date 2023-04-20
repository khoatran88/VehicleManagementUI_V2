import { getVehicleById } from 'src/api/routes'

export const useVehicle = async () => {
  const a = await getVehicleById()
  return a.data.data
}
