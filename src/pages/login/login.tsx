import React, { useState, useEffect } from 'react'
import { useAuthContext } from 'src/context'
import { useSignIn } from 'src/hooks/auth'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Login() {
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const { setTokens } = useAuthContext()
  const { signIn, isLoggedIn } = useAuthContext()
  const navigate = useNavigate()
  const { mutate: handleSignIn } = useSignIn()
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/', { replace: true })
    }
  }, [isLoggedIn])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSignIn(
      { userName: user, password: pwd },
      {
        onSuccess: (response) => {
          setTokens(response.data.accessToken, response.data.refreshToken)
          signIn(response)
        },
        onError: (error: any) => {
          console.log(error)
        },
      }
    )
  }

  return (
    <div className="d-flex vh-100">
      <div className="d-flex justify-content-center col">
        <form
          className="m-auto w-full max-w-[400px]"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="d-flex w-100 align-items-center justify-content-center">
            <img src="logo192.png" alt="LOGO" />
          </div>
          <h1 className="p-4 text-center fs-4 fw-bold">
            Wellcome To TNG Vehicle Management
          </h1>
          <div className="w-100">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="username"
                onChange={(e) => setUser(e.target.value)}
              />
              <label htmlFor="username">User Name</label>
            </div>
          </div>

          <div className="w-100">
            <div className="form-floating">
              <input
                autoComplete="off"
                type="password"
                className="form-control"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <div className="d-flex justify-content-between pb-5 pt-3">
            <div className="remember-me">
              <p className="d-flex align-items-center">
                <input className="me-2" type="checkbox" /> Remember me
              </p>
            </div>
            <p>Recover password</p>
          </div>

          <Button variant="primary" type="submit" className="w-100">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  )
}
