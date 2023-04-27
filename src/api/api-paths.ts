export const BASE_URL = `https://localhost:9300/api`

export const path = (base: string, subLink: string) => `${base}${subLink}`

export const apiUrl = {
  // auth
  login: path(BASE_URL, '/Auth/login'),

  vehicle: {
    getVehicleDetail: path(
      BASE_URL,
      '/Vehicle/GetVehicleById?vehicleId=581253d8-a784-4e7f-939c-c9764a91c1c0'
    ),
  },
}
