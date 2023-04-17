import { Navigate, RouteObject } from 'react-router-dom'
import { DashboardLayout, Login, RequireAuth, VehicleManager } from 'src/pages'

export function privateRoutes(): RouteObject[] {
  const privateRoutes: RouteObject[] = [
    {
      path: '/',
      element: <RequireAuth />,
      children: [
        {
          path: 'dashboard',
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <Navigate to="dashboard" />,
            },
            {
              path: 'vehicle-mannager',
              element: <VehicleManager />,
            },
          ],
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
