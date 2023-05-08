import { Modal } from 'react-bootstrap'
import anh1 from 'src/asset/images/logo-merc.jpg'
import { VehicleVM } from 'src/types'
import { useForm } from 'react-hook-form'
import { useVehicle } from 'src/hooks/vehicle'

export default function VehicleCreateEdit({
  show,
  onHide,
  data,
}: {
  show: boolean
  onHide: any
  data: VehicleVM
}) {
  const { mutate: handleAddVehicle } = useVehicle()

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    handleAddVehicle(data)
  }

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
              <div className="row-6">
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
              <div className="row-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-6">
                      <div className="row pb-2">
                        <div className="col-6"><h6>Id:</h6></div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Id" defaultValue={data.id} {...register("id")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Plate Number:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Plate Number" defaultValue={data.plateNumber} {...register("plateNumber")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Brand:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Password" defaultValue={data.brand} {...register("brand")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Model:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Model" defaultValue={data.model} {...register("model")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Engine Number:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Engine Number" defaultValue={data.engineNumber} {...register("engineNumber")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Chassis Number:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Chassis Number" defaultValue={data.chassisNumber} {...register("chassisNumber")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Color:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Model" defaultValue={data.color} {...register("color")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Type:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Type" defaultValue={data.type} {...register("type")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Production Year:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="number" placeholder="Production Year" defaultValue={data.productionYear} {...register("productionYear", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Production Country:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Production Country" defaultValue={data.productionCountry} {...register("productionCountry")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Life Time Limit To:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="number" placeholder="Life Time Limit To" defaultValue={data.lifetimeLimitTo} {...register("lifetimeLimitTo", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Purchased Date:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Purchased Date" {...register("purchasedDate")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Last Updated Date:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Last Updated Date" {...register("lastUpdatedDate")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Last Inspection Date:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Last Inspection Date" {...register("lastInspectionDate")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Image:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Image" {...register("image")} />
                        </div>
                      </div>
                    </div>

                    {/* VehicleSpecs */}

                    <div className="col-6">
                      <div className="row pb-2">
                        <div className="col-6"><h6>VehicleSpec Id:</h6></div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Id" {...register("vehicleSpecs.id")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Last Updated Date:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Last Updated Date" {...register("vehicleSpecs.lastUpdatedDate")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>VehicleId:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="vehicleId" {...register("vehicleSpecs.vehicleId")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Engine Type:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Engine Type" {...register("vehicleSpecs.engineType")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Number Of Cylinders:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Number Of Cylinders" {...register("vehicleSpecs.numberofCylinders", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Output:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Output" {...register("vehicleSpecs.output", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Tranmission Type:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Tranmission Type" {...register("vehicleSpecs.tranmissionType")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Brake Type:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Brake Type" {...register("vehicleSpecs.brakeType")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Drive Train Type:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Drive Train Type" {...register("vehicleSpecs.drivetrainType")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Wheel Formula:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Wheel Formula" {...register("vehicleSpecs.wheelFormula")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Wheel Tread:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Wheel Tread" {...register("vehicleSpecs.wheelTread")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Dimension:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Dimension" {...register("vehicleSpecs.dimension")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Wheel Base:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Wheel Base" {...register("vehicleSpecs.wheelbase")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Kerb Mass:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Kerb Mass" {...register("vehicleSpecs.kerbMass", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Gross Mass:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Gross Mass" {...register("vehicleSpecs.grossMass", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Seats:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Seats" {...register("vehicleSpecs.seats", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Number Of Tires:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Number Of Tires" {...register("vehicleSpecs.numberOfTires", { valueAsNumber: true })} />
                        </div>
                      </div>
                    </div>
                    <Modal.Footer>
                      <button className="btn btn-primary" type="button" onClick={onHide}>
                        Close
                      </button>
                      <button className="btn btn-primary" type="submit">
                        Save
                      </button>
                    </Modal.Footer>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
