import styled from 'styled-components'
import { Container } from './components/Container'
import { Sidebar } from './components/Sidebar'
import GlobalStyles from './globalStyles'
import { routes } from './routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { rootGlobalState } from './store/rootGlobalState'

const GlobalContainer = styled.div`
  display: flex;
`
function App(): JSX.Element {
  return (
    <GlobalContainer className="App">
      <GlobalStyles />
      <Router>
        <Sidebar />
        <Provider store={rootGlobalState}>
          <Container>{routes()}</Container>
        </Provider>
      </Router>
    </GlobalContainer>
  )
}

export default App
