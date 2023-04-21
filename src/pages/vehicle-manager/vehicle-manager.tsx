import { Component } from 'react'
import GetVehicle from 'src/api/routes/vehicle';
import { Vehicle } from 'src/types';
import { TableLayout } from './table-layout';
import { ModalLayout } from '../modal-layout';

interface VehicleManagerProps {
}

type VehicleManagerState = {
  modalShow: boolean
};

export default class VehicleManager extends Component<VehicleManagerProps, VehicleManagerState> {
  dataVH: Vehicle = {}

  constructor(props: VehicleManagerProps) {
    super(props);
    this.state = { modalShow: false };
    this.dataVH = GetVehicle()
  }

  setModalShow = (data: boolean) => {
    this.setState({ modalShow: data });
  };

  render() {
    const { modalShow } = this.state;
    return (
      < div className="cointainer" >
        <div className="row">
          <div className="col-12 px-5">
            <button className="btn btn-primary" type="button" onClick={() => this.setModalShow(true)}>Add New</button>
          </div>
          <div className="col-12 p-5">
            <TableLayout />
          </div>
        </div>
        <ModalLayout show={modalShow} onHide={() => this.setModalShow(false)} data={this.dataVH} />
      </div >
    )
  }
}