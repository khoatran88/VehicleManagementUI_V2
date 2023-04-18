import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthContext } from 'src/context'

function RequireAuth() {
  const { isLoggedIn } = useAuthContext()
  const location = useLocation()

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default RequireAuth
