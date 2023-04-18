import { t } from 'i18next'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react'
import { useQueryClient } from 'react-query'
import { useLocalStorageState } from 'src/hooks'
import { AuthContextState } from 'src/types'

const AuthContext = createContext<any>(null)

const initialState: AuthContextState = {
  isLoggedIn: false,
}

const authContextReducer = (
  state: AuthContextState,
  payload: Partial<AuthContextState>
) => ({ ...state, ...payload })

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authContextReducer, initialState)
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  const { state, dispatch } = context

  if (context === undefined) throw new Error(`${t('error.withinAuthProvider')}`)

  const queryClient = useQueryClient()

  const [authTokenInLocalStorage, setAuthTokenInLocalStorage] =
    useLocalStorageState('authToken', '')

  const [refreshTokenInLocalStorage, setRefreshTokenInLocalStorage] =
    useLocalStorageState('refreshToken', '')

  const setTokens = (authToken: string, refreshToken: string) => {
    setAuthTokenInLocalStorage(authToken)
    setRefreshTokenInLocalStorage(refreshToken)
  }

  const resetToken = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('refreshToken')
  }

  const clearCache = () => queryClient.clear()

  const signIn = useCallback(
    (response: any) => {
      setTokens(response.data.accessToken, response.data.refreshToken)
      dispatch({ isLoggedIn: true })
    },
    [authTokenInLocalStorage, refreshTokenInLocalStorage]
  )

  const signOut = useCallback(() => {
    return dispatch({
      isLoggedIn: true,
    })
  }, [resetToken, clearCache])

  useEffect(() => {
    if (localStorage.getItem('authToken') === '') {
      resetToken()
      clearCache()
    }
  })

  useEffect(() => {
    if (!authTokenInLocalStorage && state.isLoggedIn !== true) {
      resetToken()
      clearCache()
    } else {
      return dispatch({
        isLoggedIn: true,
      })
    }
    return dispatch({
      initialState,
    })
  }, [authTokenInLocalStorage, dispatch])

  return {
    state,
    setTokens,
    signIn,
    signOut,
    isLoggedIn: state.isLoggedIn,
    authToken: authTokenInLocalStorage,
    refreshToken: refreshTokenInLocalStorage,
  }
}
