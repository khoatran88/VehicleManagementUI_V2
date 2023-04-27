export interface VehicleVM {
  id?: string
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
  purchasedDate?: Date
  lastInspectionDate?: Date
}