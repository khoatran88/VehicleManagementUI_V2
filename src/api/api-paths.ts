export const BASE_URL = `https://localhost:7271/api`


export const path = (base: string, subLink: string) => `${base}${subLink}`

export const apiUrl = {
  // auth
  login: path(BASE_URL, '/Auth/login'),

  vehicle: {
    getVehicleDetail: path(BASE_URL, '/Vehicle/GetVehicleById'),
    getVehicles: path(BASE_URL, '/Vehicle/GetAllVehicles'),
    createVehicle: path(BASE_URL, '/Vehicle/CreateVehicle'),
    editVehicle: path(BASE_URL, '/Vehicle/UpdateVehicle'),
  },
}
