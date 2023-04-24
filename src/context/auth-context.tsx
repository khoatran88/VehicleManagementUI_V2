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
import { AuthContextState, AuthTokens, UserInfo } from 'src/types'

const AuthContext = createContext<any>(null)

const initialState: AuthContextState = {
  isLoggedIn: false,
  user: undefined,
  authToken: undefined,
  refreshToken: undefined,
}

const authContextReducer = (
  state: AuthContextState,
  payload: Partial<AuthContextState>
) => ({ ...initialState, ...state, ...payload })

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authContextReducer, initialState)
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error(`${t('error.withinAuthProvider')}`)
  }

  const { state, dispatch } = context

  const queryClient = useQueryClient()

  const [authTokenInLocalStorage, setAuthTokenInLocalStorage] =
    useLocalStorageState('authToken', '')

  const [refreshTokenInLocalStorage, setRefreshTokenInLocalStorage] =
    useLocalStorageState('refreshToken', '')

  const setTokens = useCallback((authToken: string, refreshToken: string) => {
    setAuthTokenInLocalStorage(authToken)
    setRefreshTokenInLocalStorage(refreshToken)
  }, [])

  const setUser = useCallback((user: UserInfo) => {
    dispatch({ user })
  }, [])

  const login = useCallback(
    (tokens: AuthTokens, user: UserInfo) => {
      return new Promise<void>((resolve) => {
        setTokens(tokens.accessToken, tokens.refreshToken)
        setUser(user)
        dispatch({ isLoggedIn: true })
        resolve()
      })
    },
    [setTokens, setUser]
  )

  const logout = useCallback(() => {
    setTokens('', '')
    dispatch({ isLoggedIn: false, user: null })
    queryClient.clear()
  }, [setTokens, queryClient])

  useEffect(() => {
    if (localStorage.getItem('authToken') === '') {
      setTokens('', '')
      dispatch({ isLoggedIn: false, user: null })
      queryClient.clear()
    }
  }, [setTokens, queryClient])

  useEffect(() => {
    if (!authTokenInLocalStorage && state.isLoggedIn !== true) {
      setTokens('', '')
      dispatch({ isLoggedIn: false, user: null })
      queryClient.clear()
    } else {
      dispatch({ isLoggedIn: true })
    }
  }, [authTokenInLocalStorage, setTokens, state.isLoggedIn, queryClient])

  return {
    state,
    setTokens,
    login,
    logout,
    isLoggedIn: state.isLoggedIn,
    authToken: authTokenInLocalStorage,
    refreshToken: refreshTokenInLocalStorage,
  }
}
