import { Modal } from 'react-bootstrap'
import anh1 from 'src/asset/images/logo-merc.jpg'
import { VehicleVM } from 'src/types'

export default function VehicleCreateEdit({
  show,
  onHide,
  data,
}: {
  show: boolean
  onHide: any
  data: VehicleVM
}) {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Vehicle
          {data.id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <div className="col-12 text-center">
                    <img src={anh1} alt="none" />
                  </div>
                  <div className="col-12 text-center">
                    <img className="col-3" src={anh1} alt="none" />
                    <img className="col-3" src={anh1} alt="none" />
                    <img className="col-3" src={anh1} alt="none" />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-12">
                    <div className="row pb-2">
                      <div className="col-6">
                        <h6>Id:</h6>
                      </div>
                      <div className="col-6">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Id"
                          defaultValue={data.id}
                        />
                      </div>
                    </div>
                    <div className="row pb-2">
                      <div className="col-6">
                        <h6>Plate Number:</h6>
                      </div>
                      <div className="col-6">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Plate Number"
                          defaultValue={data.plateNumber}
                        />
                      </div>
                    </div>
                    <div className="row pb-2">
                      <div className="col-6">
                        <h6>Brand:</h6>
                      </div>
                      <div className="col-6">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Password"
                          defaultValue={data.brand}
                        />
                      </div>
                    </div>
                    <div className="row pb-2">
                      <div className="col-6">
                        <h6>Model:</h6>
                      </div>
                      <div className="col-6">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Model"
                          defaultValue={data.model}
                        />
                      </div>
                    </div>
                    <div className="row pb-2">
                      <div className="col-6">
                        <h6>Engine Number:</h6>
                      </div>
                      <div className="col-6">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Engine Number"
                          defaultValue={data.engineNumber}
                        />
                      </div>
                    </div>
                    <div className="row pb-2">
                      <div className="col-6">
                        <h6>Chassis Number:</h6>
                      </div>
                      <div className="col-6">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Chassis Number"
                          defaultValue={data.chassisNumber}
                        />
                      </div>
                    </div>
                    <div className="row pb-2">
                      <div className="col-6">
                        <h6>Color:</h6>
                      </div>
                      <div className="col-6">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Model"
                          defaultValue={data.color}
                        />
                      </div>
                    </div>
                    <div className="row pb-2">
                      <div className="col-6">
                        <h6>Type:</h6>
                      </div>
                      <div className="col-6">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Model"
                          defaultValue={data.type}
                        />
                      </div>
                    </div>
                    <div className="row pb-2">
                      <div className="col-6">
                        <h6>Production Year:</h6>
                      </div>
                      <div className="col-6">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Production Year"
                          defaultValue={data.productionYear}
                        />
                      </div>
                    </div>
                    <div className="row pb-2">
                      <div className="col-6">
                        <h6>Production Country:</h6>
                      </div>
                      <div className="col-6">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Production Country"
                          defaultValue={data.productionCountry}
                        />
                      </div>
                    </div>
                    <div className="row pb-2">
                      <div className="col-6">
                        <h6>Life Time Limit To:</h6>
                      </div>
                      <div className="col-6">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Life Time Limit To"
                          defaultValue={data.lifetimeLimitTo}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" type="button" onClick={onHide}>
          Close
        </button>
        <button className="btn btn-primary" type="button" onClick={onHide}>
          Save
        </button>
      </Modal.Footer>
    </Modal>
  )
}
