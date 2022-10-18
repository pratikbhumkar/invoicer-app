import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'

export const Login = (): JSX.Element => {
  const { loginWithRedirect } = useAuth0()

  useEffect(() => {
    void loginWithRedirect()
  })

  return <></>
}

export default Login
