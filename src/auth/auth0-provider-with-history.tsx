import { useNavigate } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

interface props {
  children: React.ReactNode
}

const Auth0ProviderWithHistory = ({ children }: props): JSX.Element => {
  const navigateTo = useNavigate()
  const domain = process.env.REACT_APP_AUTH0_DOMAIN ?? ''
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID ?? ''
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE ?? ''
  const redirectUri = process.env.REACT_APP_REDIRECT_URI ?? ''

  const onRedirectCallback = (appState: any): void => {
    navigateTo(appState?.returnTo ?? window.location.pathname)
  }
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
      audience={audience}>
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithHistory
