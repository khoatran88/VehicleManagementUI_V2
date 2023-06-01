import { Navigate, RouteObject } from 'react-router-dom'
import { Dashboard, MainLayout, RequireAuth, VehicleManager } from 'src/pages'
import { VehicleDetail } from 'src/pages/vehicle-manager/vehicle-detail'

export function privateRoutes(): RouteObject[] {
  const privateRoutes: RouteObject[] = [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <RequireAuth />,
          children: [
            { path: '', element: <Navigate to="dashboard" replace /> },
            {
              path: 'dashboard',
              element: <Dashboard />,
            },
            {
              path: 'vehicle-mannager',
              element: <VehicleManager />,
            },
            {
              path: 'vehicle-detail/:id',
              element: < VehicleDetail />,
            },
          ],
        },
      ],
    },
  ]

  return privateRoutes
}
