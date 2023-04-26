import { Component } from 'react'
import { VehicleVM } from 'src/types';
import { VechicleTable } from './vehicle-table';
import * as VehicleActions from 'src/api/routes'
import VehicleCreateEdit from './vehicle-create-edit/vehicle-create-edit';

interface VehicleManagerProps {
}

type VehicleManagerState = {
  modalShow: boolean
  pageNumber: number
  pageSize: number
};

export default class VehicleManager extends Component<VehicleManagerProps, VehicleManagerState> {
  vehicle: VehicleVM = {}

  vehicles: VehicleVM[] = []

  constructor(props: VehicleManagerProps) {
    super(props);
    this.state = {
      modalShow: false,
      pageNumber: 1,
      pageSize: 20
    };
  }

  async componentDidMount() {
    this.vehicles = (await this.fetchVehicles(this.state.pageNumber, this.state.pageSize)).data as VehicleVM[]
  }

  async fetchVehicles(PageNumber: number, PageSize: number) {
    var rs = await VehicleActions.fetchVehicles(PageNumber, PageSize);
    return rs
  }

  async fetchVehicleDetail(id: string) {
    var rs = await VehicleActions.fetchDetail(id);
    this.vehicle = rs.data as VehicleVM;
  }

  setModalShow = (data: boolean) => {
    this.setState({ modalShow: data });
    if (!this.state.modalShow) this.vehicle = {}
  };

  editVehicle = async (vehicleId: string) => {
    await this.fetchVehicleDetail(vehicleId!);
    this.setModalShow(!this.state.modalShow)
  }

  render() {
    const { modalShow } = this.state;
    return (
      < div className="container-fluid">
        <div className="row px-5">
          <div className="col-12">
            <button className="btn btn-primary" type="button" onClick={() => this.setModalShow(true)}>Add New</button>
          </div>
          <div className="col-12">
            <VechicleTable vehicles={this.vehicles} handleEditVehicle={this.editVehicle} />
          </div>
        </div>
        <VehicleCreateEdit show={modalShow} onHide={() => this.setModalShow(false)} data={this.vehicle} />
      </div >
    )
  }
}