import React, { useState, useEffect } from 'react'
import { useAuthContext } from 'src/context'
import { useSignIn } from 'src/hooks/auth'
import logo1 from 'src/asset/images/logo-merc.jpg'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const { setTokens } = useAuthContext()
  const { signIn, isLoggedIn } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])

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
    <div className="grid h-screen w-full grid-cols-1 sm:grid-cols-2">
      <div className="hidden bg-sky-700 sm:block">
        <div className="h-full w-full bg-sky-700 object-cover">aaa</div>
        <p className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
          {errMsg}
        </p>
      </div>
      <div className="flex flex-col justify-center">
        <form
          className="mx-auto w-full max-w-[400px]"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex w-full items-center justify-center">
            <img src={logo1} alt="LOGO" />
          </div>
          <h1 className="py-7 text-center text-[20px] font-bold dark:text-blue-800">
            Wellcome To TNG Vehicle Management
          </h1>
          <div className="pb-5">
            <label htmlFor="username" className="flex flex-col">
              Username
              <input
                className="mt-2 rounded-lg border-x border-blue-800 p-2 focus:border-blue-500 focus:outline-none"
                type="text"
                id="username"
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </label>
          </div>

          <div className="pb-5">
            <label htmlFor="password" className="flex flex-col">
              Password
              <input
                className="mt-2 rounded-lg border-blue-800 p-2 focus:border-blue-500 focus:outline-none"
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </label>
          </div>

          <div className="flex justify-between pb-5">
            <div className="remember-me">
              <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Remember me
              </p>
            </div>
            <h4>Recover password</h4>
          </div>

          <button
            className="w-full rounded-lg bg-blue-500 p-3 shadow-lg"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
