import { useCallback, useMemo, useState } from 'react'
import { HelperText } from '../components/helper-text'
import axios from 'axios'
import { InputText } from '../components/input-text'

type LoginData = {
  email?: string
  password?: string
}

export default function LoginPage() {
  // implementation of useState
  const [loginData, setLoginData] = useState<LoginData>({})

  // implementation of useMemo
  const errorMessage = useMemo(
    () => {
      const { email, password } = loginData
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (!email) return 'Email is required!'
      if (!emailRegex.test(email)) return 'Email is invalid!'
      if (!password) return 'Password is required!'

      return null
    },
    [loginData]
  )

  // implementation of useCallback & axios
  const handleLogin = useCallback(
    async () => {
      if (errorMessage) return

      const response = await axios.post(
        'https://www.sample.app/login',
        loginData,
        {
          headers: { 'Content-Type': 'application/json' }
        }
      )
      console.log(response)

      // ...REST ACTION
    },
    [errorMessage, loginData]
  )

  return (
    <main>
      <h1>LOGIN</h1>
      <p>Please input your email and password to login.</p>
      <form onSubmit={e => e.preventDefault()}>
        <InputText
          label='Email'
          type='email'
          name='email'
          placeholder='Input your email'
          onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
        />
        <InputText
          label='Password'
          type='password'
          name='password'
          placeholder='Input your password'
          onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
        />
        <HelperText message={errorMessage} />
        <button onClick={handleLogin}>
          Login
        </button>
      </form>
    </main>
  )
}
