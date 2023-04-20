import { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { SmallSpinner } from 'src/components'
import ModalLayout from '../modal-layout/modal-layout'

export default function DashboardLayout() {
  const [modalShow, setModalShow] = useState(false)
  const handleClose = () => setModalShow(false)
  return (
    <div className="grow px-8 py-5 sm:px-20">
      <Suspense fallback={<SmallSpinner />}>
        <Outlet />
      </Suspense>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setModalShow(true)}
      >
        Edit Vehicle
      </button>
      <ModalLayout show={modalShow} onHide={handleClose} />
    </div>
  )
}
