import React, { useState, useEffect } from 'react'
import { useAuthContext } from 'src/context'
import { useSignIn } from 'src/hooks/auth'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
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
          signIn(response)
        },
        onError: (error: any) => {
          console.log(error)
        },
      }
    )
  }

  return (
    <div className="login-wrapper">
      <section>
        <p className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
          {errMsg}
        </p>
        <h1>Sign In</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>Username:</div>
          <input
            type="text"
            id="username"
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />

          <div>Password:</div>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <button type="submit">Sign In</button>
        </form>
      </section>
    </div>
  )
}
