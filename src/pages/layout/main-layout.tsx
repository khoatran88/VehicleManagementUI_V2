import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { SmallSpinner, SidebarMenu } from 'src/components'

export default function MainLayout() {
  return (
    <div>
      <main className="row m-auto">
        {/* <Header /> */}
        <aside className="col-md-2 ps-0">
          <SidebarMenu />
        </aside>
        <div className="col-md-9">
          <Suspense fallback={<SmallSpinner />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
