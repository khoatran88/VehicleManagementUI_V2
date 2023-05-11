import { Modal } from 'react-bootstrap'
import anh1 from 'src/asset/images/logo-merc.jpg'
import { VehicleVM } from 'src/types'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { Value } from 'sass'

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
  let data1: VehicleVM = data;

  const { setValue, register, handleSubmit, reset } = useForm({
    defaultValues: data1,
    resetOptions: {
      keepDirtyValues: false, // user-interacted input will be retained
      keepErrors: false, // input errors will be retained with value update
    }
  });

  useEffect(() => {
    data1 = {}
    reset(data1)
  }, [data1])
  //setValue('plateNumber', data.plateNumber);
  //useEffect(() => setValue(VehicleVM, data), [data])


  const onSubmit = handleAddVehicle
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
                      <input className="form-control" type="hidden" placeholder="id" {...register("id")} />
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Plate Number:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Plate Number" {...register("plateNumber")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Brand:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Password" {...register("brand")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Model:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Model" {...register("model")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Engine Number:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Engine Number" {...register("engineNumber")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Chassis Number:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Chassis Number" {...register("chassisNumber")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Color:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Model" {...register("color")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Type:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Type" {...register("type")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Production Year:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="number" placeholder="Production Year" {...register("productionYear", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Production Country:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Production Country" {...register("productionCountry")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Life Time Limit To:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="number" placeholder="Life Time Limit To" {...register("lifetimeLimitTo", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Purchased Date:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="datetime-local" placeholder="Purchased Date" {...register("purchasedDate")} />
                        </div>
                      </div>
                      {/* <div className="row pb-2">
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
                      </div> */}
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Image:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Image" {...register("image")} />
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
                          <input className="form-control" type="datetime-local" placeholder="Last Updated Date" {...register("vehicleSpec.lastUpdatedDate")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Engine Type:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Engine Type" {...register("vehicleSpec.engineType")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Number Of Cylinders:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Number Of Cylinders" {...register("vehicleSpec.numberofCylinders", { valueAsNumber: true })} />
                        </div>
                      </div>
                      {/* <input className="form-control" type="text" placeholder="Engine Type" {...register("vehicle.vehicleSpec.vehicleId")} /> */}
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Output:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Output" {...register("vehicleSpec.output", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Tranmission Type:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Tranmission Type" {...register("vehicleSpec.tranmissionType")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Brake Type:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Brake Type" {...register("vehicleSpec.brakeType")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Drive Train Type:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Drive Train Type" {...register("vehicleSpec.drivetrainType")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Wheel Formula:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Wheel Formula" {...register("vehicleSpec.wheelFormula")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Wheel Tread:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Wheel Tread" {...register("vehicleSpec.wheelTread")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Dimension:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Dimension" {...register("vehicleSpec.dimension")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Wheel Base:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Wheel Base" {...register("vehicleSpec.wheelbase")} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Kerb Mass:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Kerb Mass" {...register("vehicleSpec.kerbMass", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Gross Mass:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Gross Mass" {...register("vehicleSpec.grossMass", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Seats:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Seats" {...register("vehicleSpec.seats", { valueAsNumber: true })} />
                        </div>
                      </div>
                      <div className="row pb-2">
                        <div className="col-6">
                          <h6>Number Of Tires:</h6>
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="text" placeholder="Number Of Tires" {...register("vehicleSpec.numberOfTires", { valueAsNumber: true })} />
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
