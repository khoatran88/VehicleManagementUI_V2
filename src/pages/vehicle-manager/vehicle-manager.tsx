import { Component } from 'react'
import { VehicleVM } from 'src/types'
import { VechicleTable } from './vehicle-table'
import * as VehicleActions from 'src/api/routes'
import VehicleCreateEdit from './vehicle-create-edit/vehicle-create-edit'
import { Pagnation, DefaultPagnation } from 'src/types/response'

interface VehicleManagerProps {
}

type VehicleManagerState = {
  modalShow: boolean
  pagnation: Pagnation
}

export default class VehicleManager extends Component<
  VehicleManagerProps,
  VehicleManagerState
> {
  vehicle: VehicleVM = {}
  vehicles: VehicleVM[] = []
  constructor(props: VehicleManagerProps) {
    super(props)
    this.state = {
      modalShow: false,
      pagnation: DefaultPagnation()
    }
  }

  async componentDidMount() {
    await this.fetchData(this.state.pagnation.pageNumber, this.state.pagnation.pageSize)
  }

  fetchDataPagnation(pageNumber: number, totalCount: number, pageSize: number, hasPrevious: boolean, hasNext: boolean) {
    let pg = DefaultPagnation(pageNumber, totalCount, pageSize, hasPrevious, hasNext)
    this.setState({ pagnation: pg })
  }

  async fetchData(pageNumber: number, pageSize: number) {
    var response = await this.fetchVehicles(pageNumber, pageSize)
    this.vehicles = response.data as VehicleVM[]
    this.fetchDataPagnation(pageNumber, response.totalCount!, pageSize, response.hasPrevious!, response.hasNext!)
  }

  async fetchVehicles(PageNumber: number, PageSize: number) {
    return await VehicleActions.fetchVehicles(PageNumber, PageSize)
  }

  async fetchVehicleDetail(id: string) {
    this.vehicle = {}
    var rs = await VehicleActions.fetchDetail(id)
    this.vehicle = rs.data as VehicleVM
  }

  setShowCreateEdit = (data: boolean) => {
    this.setState({ modalShow: data })
  }

  editVehicle = async (vehicleId: string) => {
    await this.fetchVehicleDetail(vehicleId!)
    this.setShowCreateEdit(true)
  }

  handleClickPagnation = async (data: number) => {
    await this.fetchData(data, this.state.pagnation.pageSize)
  }

  handleShowAddVehicle = () => {
    this.vehicle = {}
    this.setShowCreateEdit(true)
  }

  hanldeAddVehicle = async (value: any) => {
    await VehicleActions.createAndEditVehicle(value.vehicle)
    this.setShowCreateEdit(false)
  }

  render() {
    const { modalShow } = this.state
    const { pagnation } = this.state
    return (
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-12">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => this.handleShowAddVehicle()}
              >
                Add New
              </button>
            </div>
            <div className="col-12">
              <VechicleTable
                vehicles={this.vehicles}
                handleEditVehicle={this.editVehicle}
                handleGetData={this.handleClickPagnation}
                pagnation={pagnation}
              />
            </div>
          </div>
          <VehicleCreateEdit
            show={modalShow}
            onHide={() => this.setShowCreateEdit(false)}
            data={this.vehicle}
            handleAddVehicle={this.hanldeAddVehicle}
          />
        </div>
      </div>
    )
  }
}
