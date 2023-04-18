import { Navigate, RouteObject } from 'react-router-dom'
import { DashboardLayout, Login, RequireAuth, VehicleManager } from 'src/pages'

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
    {
      path: 'login',
      element: <Login />,
    },
  ]

  return privateRoutes
}
