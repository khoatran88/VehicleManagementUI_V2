import { Navigate, RouteObject } from 'react-router-dom'
import { DashboardLayout, RequireAuth, VehicleManager } from 'src/pages'

export function privateRoutes(): RouteObject[] {
  const privateRoutes: RouteObject[] = [
    {
      path: '/',
      element: <RequireAuth />,
      children: [
        { path: '', element: <Navigate to="dashboard" replace /> },
        {
          path: 'dashboard',
          element: <DashboardLayout />,
        },
        {
          path: 'vehicle-mannager',
          element: <VehicleManager />,
        },
      ],
    },
  ]

  return privateRoutes
}
