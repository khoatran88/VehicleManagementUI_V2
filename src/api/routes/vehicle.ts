import { Vehicle } from 'src/types'

export default function GetVehicle() {
  const vehicle: Vehicle = {
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
    purchasedDate: '2020-01-01T00:00:00',
    lastUpdatedDate: '2020-01-01T00:00:00',
    lastInspectionDate: '2020-01-01T00:00:00',
  }
  return vehicle
}
