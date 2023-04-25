import { Component } from 'react'
import GetVehicle from 'src/api/routes/vehicle';
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
  dataVH: VehicleVM = {}

  vehicles: VehicleVM[] = []

  constructor(props: VehicleManagerProps) {
    super(props);
    this.state = {
      modalShow: false,
      pageNumber: 1,
      pageSize: 20
    };
    this.dataVH = GetVehicle()
  }

  async componentDidMount() {
    this.vehicles = (await this.fetchVehicles(this.state.pageNumber, this.state.pageSize)).data as VehicleVM[]
  }

  async fetchVehicles(PageNumber: number, PageSize: number) {
    var rs = await VehicleActions.fetchVehicles(PageNumber, PageSize);
    return rs
  }

  setModalShow = (data: boolean) => {
    this.setState({ modalShow: data });
  };

  render() {
    const { modalShow } = this.state;
    return (
      < div className="container-fluid">
        <div className="row px-5">
          <div className="col-12">
            <button className="btn btn-primary" type="button" onClick={() => this.setModalShow(true)}>Add New</button>
          </div>
          <div className="col-12">
            <VechicleTable vehicles={this.vehicles} />
          </div>
        </div>
        <VehicleCreateEdit show={modalShow} onHide={() => this.setModalShow(false)} data={this.dataVH} />
      </div >
    )
  }
}