import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { SmallSpinner } from 'src/components'
import { TableLayout } from '../vehicle-manager/table-layout'

export default function DashboardLayout() {
  return (
    <div className="grow px-8 py-5 sm:px-20">
      <Suspense fallback={<SmallSpinner />}>
        <Outlet />
      </Suspense>
      <TableLayout />
    </div>
  )
}
