import { withAuthenticationRequired } from '@auth0/auth0-react'
import { ComponentType } from 'react'
import { Loading } from '../components/Loading'
interface props {
  component: ComponentType<object>
}

export const ProtectedRoute = ({ component }: props): JSX.Element => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div>
        <Loading />
      </div>
    )
  })

  return <Component />
}
