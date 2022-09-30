import styled from 'styled-components'
import { Container } from './components/Container'
import { Sidebar } from './components/Sidebar'
import GlobalStyles from './globalStyles'

const GlobalContainer = styled.div` display: flex; `
function App (): JSX.Element {
  return (
    <GlobalContainer className="App">
      <GlobalStyles/>
      <Sidebar/>
      <Container>
        <h1 className='header'>Billing & Invoices</h1>
      </Container>
    </GlobalContainer>
  )
}

export default App
