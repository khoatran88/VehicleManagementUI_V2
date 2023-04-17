import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { SmallSpinner } from 'src/components'

export default function DashboardLayout() {
  return (
    <div className="flex h-screen min-w-full flex-col justify-between">
      <main className="flex grow flex-col">
        {/* <Header /> */}
        <div className="grow px-8 py-5 sm:px-20">
          <Suspense fallback={<SmallSpinner />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
