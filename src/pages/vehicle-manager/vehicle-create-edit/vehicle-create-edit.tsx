import { Modal } from 'react-bootstrap'
import anh1 from 'src/asset/images/logo-merc.jpg'
import { VehicleVM } from 'src/types'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

export default function VehicleCreateEdit({
  show,
  onHide,
  data,
  handleAddVehicle
}: {
  show: boolean
  onHide: any
  data: VehicleVM
  handleAddVehicle: any
}) {

  const { setValue, register, handleSubmit, reset } = useForm();
  const onSubmit = handleAddVehicle
  const [processData, setprocessData] = useState(data);

  useEffect(() => {
    // reset form with user data
    reset(processData);
  }, [processData]);

  useEffect(() => setValue("vehicle", data), [data])
  const close = () => {
    reset();
    onHide()
  }

  return (
    <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter"> {data.id ? 'Edit Vehicle' : 'Add Vehicle'} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="row">
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
              <div className="row">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-6">
                      <input className="form-control" type="hidden" placeholder="id" {...register("id")} />
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Plate Number:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" id="plateNumber" type="text" placeholder="Plate Number" {...register("vehicle.plateNumber")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Brand:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Password" {...register("vehicle.brand")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Model:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Model" {...register("vehicle.model")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Engine Number:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="number" placeholder="Engine Number" {...register("vehicle.engineNumber")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Chassis Number:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Chassis Number" {...register("vehicle.chassisNumber")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Color:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Model" {...register("vehicle.color")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Type:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Type" {...register("vehicle.type")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Production Year:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="number" placeholder="Production Year" {...register("vehicle.productionYear", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Production Country:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Production Country" {...register("vehicle.productionCountry")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Life Time Limit To:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="number" placeholder="Life Time Limit To" {...register("vehicle.lifetimeLimitTo", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Purchased Date:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" step="1" type="datetime-local" placeholder="Purchased Date" {...register("vehicle.purchasedDate")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Last Updated Date:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" step="1" type="datetime-local" placeholder="Last Updated Date" {...register("vehicle.lastUpdatedDate")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Last Inspection Date:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" step="1" type="datetime-local" placeholder="Last Inspection Date" {...register("vehicle.lastInspectionDate")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Image:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="file" placeholder="Image" {...register("vehicle.image")} />
                        </div>
                      </div>
                    </div>
                    {/* vehicleSpec */}
                    <div className="col-6">
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Last Updated Date:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" step="1" type="datetime-local" placeholder="Last Updated Date" {...register("vehicle.vehicleSpecs.lastUpdatedDate")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Engine Type:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Engine Type" {...register("vehicle.vehicleSpecs.engineType")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Number Of Cylinders:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="number" placeholder="Number Of Cylinders" {...register("vehicle.vehicleSpecs.numberofCylinders", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <input className="form-control" type="hidden" placeholder="Engine Type" {...register("vehicle.vehicleSpecs.id")} />
                      <input className="form-control" type="hidden" placeholder="Engine Type" {...register("vehicle.vehicleSpecs.vehicleId")} />
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Output:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="number" placeholder="Output" {...register("vehicle.vehicleSpecs.output", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Tranmission Type:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Tranmission Type" {...register("vehicle.vehicleSpecs.tranmissionType")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Brake Type:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Brake Type" {...register("vehicle.vehicleSpecs.brakeType")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Drive Train Type:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Drive Train Type" {...register("vehicle.vehicleSpecs.drivetrainType")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Wheel Formula:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Wheel Formula" {...register("vehicle.vehicleSpecs.wheelFormula")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Wheel Tread:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Wheel Tread" {...register("vehicle.vehicleSpecs.wheelTread")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Dimension:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Dimension" {...register("vehicle.vehicleSpecs.dimension")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Wheel Base:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Wheel Base" {...register("vehicle.vehicleSpecs.wheelbase")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Kerb Mass:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="number" placeholder="Kerb Mass" {...register("vehicle.vehicleSpecs.kerbMass", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Gross Mass:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="number" placeholder="Gross Mass" {...register("vehicle.vehicleSpecs.grossMass", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Seats:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="number" placeholder="Seats" {...register("vehicle.vehicleSpecs.seats", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Number Of Tires:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="number" placeholder="Number Of Tires" {...register("vehicle.vehicleSpecs.numberOfTires", { valueAsNumber: true })} />
                        </div>
                      </div>
                    </div>
                    <div className='modal-footer'>
                      <button className="btn btn-primary" type="button" onClick={close}> Close </button>
                      <button className="btn btn-primary" type="submit"> Save </button>
                    </div>
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
