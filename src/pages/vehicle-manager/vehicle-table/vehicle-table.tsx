import { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { VehicleVM } from 'src/types'

export default function VechicleTable({ handleEditVehicle, vehicles }: { handleEditVehicle: any, vehicles: VehicleVM[] }) {
  const [page, setPage] = useState(1)

  const editVehicle = (vehicleId: string) => {
    handleEditVehicle(vehicleId)
  }

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
            {vehicles.map((data =>
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
                  <button type="button" className="btn btn-primary pl-5"
                    onClick={() => editVehicle(data.id!)}>
                    Edit Vehicle
                  </button>
                  <button type="button" className="btn btn-primary">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <PaginationControl
          page={page}
          between={4}
          total={250}
          limit={20}
          changePage={(page) => {
            setPage(page);
            console.log(page)
          }}
          ellipsis={1}
        />
      </div>
    </div>
  )
}
