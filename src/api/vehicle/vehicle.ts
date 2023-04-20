import { Vehicle } from 'src/types'

export default function GetVehicleById() {
  const data: Vehicle = {
    plateNumber: '51L-2323.88',
    brand: 'Toyota',
    model: 'Innova',
    color: 'Yellow',
    type: '9 Seat',
    purchasedDate: '2018',
    grossMass: '1800kg',
    dimension: '1800kg',
    brackType: 'Manual',
  }
  return data
}
