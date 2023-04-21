import { useState } from 'react'
import { Pagination } from 'react-bootstrap'
import GetVehicle from 'src/api/routes/vehicle'
import { ModalLayout } from 'src/pages/modal-layout'

export default function TableLayout() {
  const [modalShow, setModalShow] = useState(false)
  const data = GetVehicle()
  return (
    <div className="p-5">
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => setModalShow(true)}
      >
        Add New
      </button>
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
            <th scope="col">Purchased Date</th>
            <th scope="col">Last Inspection Date</th>
            <th scope="col">Last Updated Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
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
            <td>{data.purchasedDate}</td>
            <td>{data.lastInspectionDate}</td>
            <td>{data.lastUpdatedDate}</td>
            <td>
              <button
                type="button"
                className="btn btn-primary pl-5"
                onClick={() => setModalShow(true)}
              >
                Edit Vehicle
              </button>
              <button type="button" className="btn btn-primary">
                Delete
              </button>
            </td>
          </tr>
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
      <ModalLayout
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={data}
      />
    </div>
  )
}
