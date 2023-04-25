import { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { SmallSpinner } from 'src/components'
import { UseVehicle } from 'src/hooks/vehicle'
import { VehicleCreateEdit } from '../vehicle-manager/vehicle-create-edit'
import { VehicleManager } from '../vehicle-manager'

export default function DashboardLayout() {
  const [modalShow, setModalShow] = useState(false)
  const vehicleData = UseVehicle.useVehicle()

  return (
    <div className="grow px-8 py-5 sm:px-20">
      <Suspense fallback={<SmallSpinner />}>
        <Outlet />
      </Suspense>
      <VehicleManager />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setModalShow(true)}
      >
        Edit Vehicle
      </button>
      <VehicleCreateEdit
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={vehicleData.data}
      />
    </div>
  )
}
