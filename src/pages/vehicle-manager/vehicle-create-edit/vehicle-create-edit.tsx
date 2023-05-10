import { Modal } from 'react-bootstrap'
import anh1 from 'src/asset/images/logo-merc.jpg'
import { VehicleVM } from 'src/types'
import { useForm } from 'react-hook-form'
import { useVehicle } from 'src/hooks/vehicle'
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

  const { setValue, register, handleSubmit } = useForm();
  const onSubmit = handleAddVehicle

  useEffect(() => setValue("vehicle", data), [data])

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {data.id ? 'Edit Vehicle' : 'Add Vehicle'}
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
                        <div className="col-6">
                          <h6>Plate Number:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Plate Number" {...register("vehicle.plateNumber")} />
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
                          <input className="form-control" type="text" placeholder="Engine Number" {...register("vehicle.engineNumber")} />
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
                          <input className="form-control" type="datetime-local" placeholder="Purchased Date" {...register("vehicle.purchasedDate")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Last Updated Date:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="datetime-local" placeholder="Last Updated Date" {...register("vehicle.lastUpdatedDate")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Last Inspection Date:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="datetime-local" placeholder="Last Inspection Date" {...register("vehicle.lastInspectionDate")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Image:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Image" {...register("vehicle.image")} />
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
                          <input className="form-control" type="datetime-local" placeholder="Last Updated Date" {...register("vehicle.vehicleSpec.lastUpdatedDate")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Engine Type:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Engine Type" {...register("vehicle.vehicleSpec.engineType")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Number Of Cylinders:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Number Of Cylinders" {...register("vehicle.vehicleSpec.numberofCylinders", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Output:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Output" {...register("vehicle.vehicleSpec.output", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Tranmission Type:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Tranmission Type" {...register("vehicle.vehicleSpec.tranmissionType")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Brake Type:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Brake Type" {...register("vehicle.vehicleSpec.brakeType")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Drive Train Type:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Drive Train Type" {...register("vehicle.vehicleSpec.drivetrainType")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Wheel Formula:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Wheel Formula" {...register("vehicle.vehicleSpec.wheelFormula")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Wheel Tread:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Wheel Tread" {...register("vehicle.vehicleSpec.wheelTread")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Dimension:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Dimension" {...register("vehicle.vehicleSpec.dimension")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Wheel Base:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Wheel Base" {...register("vehicle.vehicleSpec.wheelbase")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Kerb Mass:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Kerb Mass" {...register("vehicle.vehicleSpec.kerbMass", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Gross Mass:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Gross Mass" {...register("vehicle.vehicleSpec.grossMass", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Seats:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Seats" {...register("vehicle.vehicleSpec.seats", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Number Of Tires:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Number Of Tires" {...register("vehicle.vehicleSpec.numberOfTires", { valueAsNumber: true })} />
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
