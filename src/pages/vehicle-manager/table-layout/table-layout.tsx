import { Pagination } from 'react-bootstrap'
import { VehicleVM } from 'src/types'

export default function TableLayout({ vehicles }: { vehicles: VehicleVM[] }) {

  return (
    <div className="row">
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
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
              <tr>
                <th scope="row">1</th>
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
                  >
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
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>

          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  )
}
