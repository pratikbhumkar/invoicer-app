import styled from 'styled-components'
import { Container } from './components/Container'
import { Sidebar } from './components/Sidebar'
import GlobalStyles from './globalStyles'
import { routes } from './routes'
import { Provider } from 'react-redux'
import { rootGlobalState } from './store/rootGlobalState'
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history'
import { BrowserRouter as Router } from 'react-router-dom'

const GlobalContainer = styled.div`
  display: flex;
`
function App(): JSX.Element {
  return (
    <GlobalContainer className="App">
      <GlobalStyles />
      <Router>
        <Sidebar />
        <Auth0ProviderWithHistory>
          <Provider store={rootGlobalState}>
            <Container>{routes()}</Container>
          </Provider>
        </Auth0ProviderWithHistory>
      </Router>
    </GlobalContainer>
  )
}

export default App
