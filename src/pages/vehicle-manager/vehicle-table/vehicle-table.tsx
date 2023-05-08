import { useState } from 'react'
import { PaginationControl } from 'react-bootstrap-pagination-control'
import { VehicleVM } from 'src/types'
import { PagedResponse, Pagnation } from 'src/types/response'

export default function VechicleTable({
  handleEditVehicle,
  vehicles,
  handleGetData,
  pagnation,
}: {
  handleEditVehicle: any
  vehicles: VehicleVM[]
  handleGetData: any
  pagnation: Pagnation
}) {
  const editVehicle = (vehicleId: string) => {
    handleEditVehicle(vehicleId)
  }

  const handleClickPagnation = handleGetData

  return (
    <div className="row">
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Plate Number</th>
              <th scope="col">Brand</th>
              <th scope="col">Model</th>
              <th scope="col">Engine Number</th>
              <th scope="col">Chassis Number</th>
              <th scope="col">Color</th>
              <th scope="col">Type</th>
              <th scope="col">Production Year</th>
              <th scope="col">Life Time Limit To</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((data) => (
              <tr key={data.id}>
                <td>{data.plateNumber}</td>
                <td>{data.brand}</td>
                <td>{data.model}</td>
                <td>{data.engineNumber}</td>
                <td>{data.chassisNumber}</td>
                <td>{data.color}</td>
                <td>{data.type}</td>
                <td>{data.productionYear}</td>
                <td>{data.lifetimeLimitTo}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary pl-5"
                    onClick={() => editVehicle(data.id!)}
                  >
                    Edit Vehicle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <PaginationControl
          page={pagnation.pageNumber}
          total={pagnation.totalCount!}
          limit={pagnation.pageSize}
          changePage={(page) => handleClickPagnation(page)}
          next={pagnation.hasNext}
          last={pagnation.hasPrevious}
        />
      </div>
    </div>
  )
}
