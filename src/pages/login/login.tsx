import React, { useState, useEffect } from 'react'
import { useAuthContext } from 'src/context'
import { useSignIn } from 'src/hooks/auth'
import logo1 from 'src/asset/images/logo-merc.jpg'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { UserInfo } from 'src/types'

export default function Login() {
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const { login, isLoggedIn } = useAuthContext()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])

  useEffect(() => {
    if (isLoggedIn) {
      navigate(location.state?.from || '/dashboard', { replace: true })
    }
  }, [isLoggedIn, navigate, location.state])

  const { mutate: handleSignIn } = useSignIn()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSignIn(
      { userName: user, password: pwd },
      {
        onSuccess: (response) => {
          const userInfo: UserInfo = {
            userName: user,
          }
          login(response.data, userInfo)
        },
        onError: (error: any) => {
          console.log(error)
        },
      }
    )
  }

  return (
    <div className="d-flex vh-100">
      <div className="bg-primary bg-gradient col">
        <p className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
          {errMsg}
        </p>
      </div>
      <div className="d-flex justify-content-center col">
        <form
          className="m-auto w-full max-w-[400px]"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="d-flex w-100 align-items-center justify-content-center">
            <img src={logo1} alt="LOGO" />
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
