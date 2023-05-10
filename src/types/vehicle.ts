export interface VehicleVM {
  id?: string
  lastUpdatedDate?: Date
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
  image?: string
  vehicleSpec?: VehicleSpec
}
export interface VehicleSpec{
  id?: string
  lastUpdatedDate?: Date
  vehicleId: string
  engineType?: string
  numberofCylinders?: number
  output?: number
  tranmissionType?: string
  brakeType?: string
  drivetrainType?: string
  wheelFormula?: string
  wheelTread?: string
  dimension?: string
  wheelbase?: string
  kerbMass: number
  grossMass: number
  seats: number
  numberOfTires: number
}