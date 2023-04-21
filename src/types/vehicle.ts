export interface Vehicle {
  plateNumber?: string
  brand?: string
  model?: string
  engineNumber?: string
  chassisNumber?: string
  color?: string
  type?: string
  productionYear?: number
  productionCountry?: string
  lifetimeLimitTo?: number
  purchasedDate?: string
  lastInspectionDate?: string
  lastUpdatedDate?: string
  grossMass?: string
  dimension?: string
}

export type VehicleId = {
  vehicleId: string
}

export type VehicleList = [vehicles: Vehicle]
