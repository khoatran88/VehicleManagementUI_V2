import { Component } from "react"
import { VehicleVM } from "src/types"
import * as VehicleActions from 'src/api/routes'
import { VehicleCreateEdit } from "../vehicle-create-edit"

type VehicleDetailState = {
    modalShow: boolean
    vehicle: VehicleVM
}
interface VehicleDetailProps {
}

export default class VehicleDetail extends Component<VehicleDetailProps, VehicleDetailState> {
    vehicle: VehicleVM = {}
    constructor(props: VehicleDetailProps) {
        super(props)
        this.state = {
            vehicle: {},
            modalShow: false
        }
    }
    async componentDidMount() {
        this.fetchVehicleDetail()
    }

    async fetchVehicleDetail() {
        var id = window.location.href.split('/')[4]
        this.vehicle = {}
        var rs = await VehicleActions.fetchDetail(id)
        this.setState({ vehicle: rs.data as VehicleVM })
    }

    setShowEdit = (data: boolean) => {
        this.setState({ modalShow: data })
    }

    editVehicle = async () => {
        var id = window.location.href.split('/')[4]
        await this.fetchVehicleDetail()
        this.setShowEdit(true)
    }

    hanldeAddEditVehicle = async (value: any) => {
        await VehicleActions.createAndEditVehicle(value.vehicle)
        this.setShowEdit(false)
        this.fetchVehicleDetail()
    }

    render() {
        const { modalShow } = this.state
        return (
            <div>
                <div className="row pb-3">
                    <div className="col-6">
                        <h3>Vehicle Info</h3>
                    </div>
                    <div className="col-6">
                        <button type="button" className="btn btn-primary pl-5" onClick={() => this.setShowEdit(true)}> Edit Vehicle </button>
                        <VehicleCreateEdit show={modalShow} onHide={() => this.setShowEdit(false)} data={this.state.vehicle} handleAddEditVehicle={this.hanldeAddEditVehicle} />
                    </div>
                </div>
                <div className="pb-3">
                    <div className="row">
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Plate Number: </span>
                                    <span>{this.state.vehicle.plateNumber ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Brand: </span>
                                    <span>{this.state.vehicle.brand ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Model: </span>
                                    <span>{this.state.vehicle.brand ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Engine Number: </span>
                                    <span>{this.state.vehicle.engineNumber ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Chassis Number: </span>
                                    <span>{this.state.vehicle.chassisNumber ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Color: </span>
                                    <span>{this.state.vehicle.color ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Type: </span>
                                    <span>{this.state.vehicle.type ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Production Year: </span>
                                    <span>{this.state.vehicle.productionYear ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Production Country: </span>
                                    <span>{this.state.vehicle.productionCountry ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Life Time Limit To: </span>
                                    <span>{this.state.vehicle.lifetimeLimitTo ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Purchased Date: </span>
                                    <span><>{this.state.vehicle.purchasedDate ?? "NULL"}</></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Last Inspection Date: </span>
                                    <span><>{this.state.vehicle.lastInspectionDate ?? "NULL"}</></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Image: </span>
                                    <span>{this.state.vehicle.image ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pb-3">
                    <h3>Vehicle Specs</h3>
                </div>
                <div>
                    <div className="row">
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Last Updated Date: </span>
                                    <span><>{this.state.vehicle.vehicleSpecs?.lastUpdatedDate ?? "NULL"}</></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Engine Type: </span>
                                    <span>{this.state.vehicle.vehicleSpecs?.engineType ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Number Of Cylinders: </span>
                                    <span>{this.state.vehicle.vehicleSpecs?.numberofCylinders ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Output: </span>
                                    <span>{this.state.vehicle.vehicleSpecs?.output ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Tranmission Type: </span>
                                    <span>{this.state.vehicle.vehicleSpecs?.tranmissionType ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Brake Type: </span>
                                    <span>{this.state.vehicle.vehicleSpecs?.brakeType ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Drive Train Type: </span>
                                    <span>{this.state.vehicle.vehicleSpecs?.drivetrainType ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Wheel Formula: </span>
                                    <span>{this.state.vehicle.vehicleSpecs?.wheelFormula ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Wheel Tread: </span>
                                    <span>{this.state.vehicle.vehicleSpecs?.wheelTread ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Dimension: </span>
                                    <span>{this.state.vehicle.vehicleSpecs?.dimension ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Wheel Base: </span>
                                    <span>{this.state.vehicle.vehicleSpecs?.wheelbase ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Kerb Mass: </span>
                                    <span>{this.state.vehicle.vehicleSpecs?.kerbMass ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Gross Mass: </span>
                                    <span>{this.state.vehicle.vehicleSpecs?.grossMass ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span>Seats: </span>
                                    <span>{this.state.vehicle.vehicleSpecs?.seats ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pb-3">
                            <div className="row">
                                <div className="col-12">
                                    <span className="font-weight-bold">Number Of Tires: </span>
                                    <span>{this.state.vehicle.vehicleSpecs?.numberOfTires ?? "NULL"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}