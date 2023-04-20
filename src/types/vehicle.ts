export interface Vehicle {
  data: any
  plateNumber?: string
  brand?: string
  model?: string
  color?: string
  type?: string
  purchasedDate?: string
  grossMass?: string
  dimension?: string
  brackType?: string
}

export type VehicleId = {
  vehicleId: string
}

export type VehicleList = [vehicles: Vehicle]
