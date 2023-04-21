import { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { SmallSpinner } from 'src/components'
import { useVehicle } from 'src/hooks/vehicle'
import { TableLayout } from '../vehicle-manager/table-layout'
import { ModalLayout } from '../modal-layout'

export default function DashboardLayout() {
  const [modalShow, setModalShow] = useState(false)
  const vehicleData = useVehicle()

  return (
    <div className="grow px-8 py-5 sm:px-20">
      <Suspense fallback={<SmallSpinner />}>
        <Outlet />
      </Suspense>
      <TableLayout />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setModalShow(true)}
      >
        Edit Vehicle
      </button>
      <ModalLayout
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={vehicleData.data}
      />
    </div>
  )
}
