import { Component } from 'react'
import { VehicleVM } from 'src/types';
import { VechicleTable } from './vehicle-table';
import * as VehicleActions from 'src/api/routes'
import VehicleCreateEdit from './vehicle-create-edit/vehicle-create-edit';
import { PagedResponse } from 'src/types/response';

interface VehicleManagerProps {
}

type VehicleManagerState = {
  modalShow: boolean
  pageNumber: number
  pageSize: number
  totalCount?: number 
};

export default class VehicleManager extends Component<VehicleManagerProps, VehicleManagerState> {
  vehicle: VehicleVM = {}

  vehicles: VehicleVM[] = []
  
  constructor(props: VehicleManagerProps) {
    super(props);
    this.state = {
      modalShow: false,
      pageNumber: 1,
      pageSize: 5,
      totalCount: 500,
    };
  }

  async componentDidMount() {
    var rs  = await this.fetchVehicles(this.state.pageNumber, this.state.pageSize)
    this.vehicles = rs.data as VehicleVM[]
    this.setState({totalCount: rs.totalCount})
    console.log(this.state.totalCount)
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

  handleClickPagnation = async (data: number) => {
    this.setState({pageNumber: data});
    await this.componentDidMount()
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
            <VechicleTable vehicles={this.vehicles} handleEditVehicle={this.editVehicle} handleGetData={this.handleClickPagnation} pageNumber={this.state.pageNumber} 
                           totalCount={this.state.totalCount} pageSize={this.state.pageSize}/>
          </div>
        </div>
        <VehicleCreateEdit show={modalShow} onHide={() => this.setModalShow(false)} data={this.vehicle} />
      </div >
    )
  }
}