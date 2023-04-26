import { Component } from 'react'
import { VehicleVM } from 'src/types';
import { VechicleTable } from './vehicle-table';
import * as VehicleActions from 'src/api/routes'
import VehicleCreateEdit from './vehicle-create-edit/vehicle-create-edit';
import { Pagnation } from 'src/types/response';

interface VehicleManagerProps {
}

type VehicleManagerState = {
  modalShow: boolean
  pagnation : Pagnation
};

export default class VehicleManager extends Component<VehicleManagerProps, VehicleManagerState> {
  vehicle: VehicleVM = {}

  vehicles: VehicleVM[] = []
  
  pg: Pagnation = {    
    pageNumber: 1,
    totalCount: 1000,
    pageSize: 5,
    hasPrevious: true,
    hasNext: false
  }

  constructor(props: VehicleManagerProps) {
    super(props);
    this.state = {
      modalShow: false,
     pagnation:this.pg
    };
  }

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    var rs  = await this.fetchVehicles(this.state.pagnation.pageNumber, this.state.pagnation.pageSize)
    this.vehicles = rs.data as VehicleVM[]
    this.pg.totalCount = rs.totalCount
    this.pg.hasNext = rs.hasNext
    this.pg.hasPrevious = true
    this.setState( {pagnation:this.pg })
  }

  async fetchVehicles(PageNumber: number, PageSize: number) {
    return await VehicleActions.fetchVehicles(PageNumber, PageSize);    
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
    this.pg.pageNumber = data;
    this.setState( {pagnation:this.pg });
    await this.fetchData();  
  }

  render() {
    const { modalShow } = this.state;
    const { pagnation } = this.state;
    return (
      < div className="container-fluid">
        <div className="row px-5">
          <div className="col-12">
            <button className="btn btn-primary" type="button" onClick={() => this.setModalShow(true)}>Add New</button>
          </div>
          <div className="col-12">
            <VechicleTable vehicles={this.vehicles} handleEditVehicle={this.editVehicle} handleGetData={this.handleClickPagnation} 
                           pagnation={pagnation}/>
          </div>
        </div>
        <VehicleCreateEdit show={modalShow} onHide={() => this.setModalShow(false)} data={this.vehicle} />
      </div >
    )
  }
}