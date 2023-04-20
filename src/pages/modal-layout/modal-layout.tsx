import { Modal } from 'react-bootstrap'
import anh1 from 'src/asset/images/logo-merc.jpg'

export default function ModalLayout({
  show,
  onHide,
}: {
  show: boolean
  onHide: any
}) {
  if (!show) return null
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
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container row justify-content-center">
          <div className="col-6">
            <div className="row">
              <img src={anh1} alt="none" />
            </div>
            <div className="row justify-content-center">
              <img className="col-3" src={anh1} alt="none" />
              <img className="col-3" src={anh1} alt="none" />
              <img className="col-3" src={anh1} alt="none" />
            </div>
          </div>
          <div className="col-4">
            <div className="col col-9">
              <div className="row pb-2">
                <div className="col-6">
                  <h6>Plate Number:</h6>
                </div>
                <div className="col-6">
                  <input type="text" placeholder="Plate Number" />
                </div>
              </div>
              <div className="row pb-2">
                <div className="col-6">
                  <h6>Brand:</h6>
                </div>
                <div className="col-6">
                  <input type="text" placeholder="Brand" />
                </div>
              </div>
              <div className="row pb-2">
                <div className="col-6">
                  <h6>Model:</h6>
                </div>
                <div className="col-6">
                  <input type="text" placeholder="Model" />
                </div>
              </div>
              <div className="row pb-2">
                <div className="col-6">
                  <h6>Model:</h6>
                </div>
                <div className="col-6">
                  <input type="text" placeholder="Model" />
                </div>
              </div>
              <div className="row pb-2">
                <div className="col-6">
                  <h6>Model:</h6>
                </div>
                <div className="col-6">
                  <input type="text" placeholder="Model" />
                </div>
              </div>
              <div className="row pb-2">
                <div className="col-6">
                  <h6>PurchsedDate:</h6>
                </div>
                <div className="col-6">
                  <input type="text" placeholder="PurchsedDate" />
                </div>
              </div>
              <div className="row pb-2">
                <div className="col-6">
                  <h6>Gross Mass:</h6>
                </div>
                <div className="col-6">
                  <input type="text" placeholder="Gross Mass" />
                </div>
              </div>
              <div className="row pb-2">
                <div className="col-6">
                  <h6>Dimension:</h6>
                </div>
                <div className="col-6">
                  <input type="text" placeholder="Dimension" />
                </div>
              </div>
              <div className="row pb-2">
                <div className="col-6">
                  <h6>Brake Type:</h6>
                </div>
                <div className="col-6">
                  <input type="text" placeholder="Manual" />
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
