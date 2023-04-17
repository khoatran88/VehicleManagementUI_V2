import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthContext } from 'src/context'

function RequireAuth() {
  const { isLoggedIn } = useAuthContext()
  const location = useLocation()
  // const locationState = location.state
  // console.log('666666', locationState)

  // console.log('isLoggedIn', isLoggedIn)

  // const from = locationState?.from?.pathname

  // if (isLoggedIn) {
  //   return (
  //     <Navigate
  //       to={from && from !== '/' ? from : '/login'}
  //       state={{ from: location }}
  //       replace
  //     />
  //   )
  // }

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default RequireAuth
