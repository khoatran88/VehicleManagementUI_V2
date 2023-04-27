import { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { SmallSpinner } from 'src/components'
import { VehicleManager } from '../vehicle-manager'

export default function DashboardLayout() {

  return (
    <div className="grow px-8 py-5 sm:px-20">
      <Suspense fallback={<SmallSpinner />}>
        <Outlet />
      </Suspense>
      <VehicleManager />
    </div>
  )
}
