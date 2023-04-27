import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { SmallSpinner, SidebarMenu } from 'src/components'

export default function MainLayout() {
  return (
    <div>
      <main className="row align-items-start">
        {/* <Header /> */}
        <div className="col-md-2">
          <SidebarMenu />
        </div>
        <div className="col-md-10">
          <Suspense fallback={<SmallSpinner />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
