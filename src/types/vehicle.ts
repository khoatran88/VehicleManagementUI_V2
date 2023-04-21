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

export interface Vehicle2 {
  Id?: string
  PlateNumber?: string
  Brand?: string
  Model?: string
  EngineNumber?: string
  ChassisNumber?: string
  Color?: string
  Type?: string
  ProductionYear?: number
  ProductionCountry?: string
  LifetimeLimitTo?: number
  PurchasedDate?: Date
  LastInspectionDate?: Date
}

export type VehicleList = [vehicles: Vehicle]
