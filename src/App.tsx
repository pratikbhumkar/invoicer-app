import styled from 'styled-components';
import { Container } from './components/Container';
import { Sidebar } from './components/Sidebar';
import GlobalStyles from './globalStyles';
import { routes } from './routes';
const GlobalContainer = styled.div`
  display: flex;
`;
function App(): JSX.Element {
  return (
    <GlobalContainer className="App">
      <GlobalStyles />
      <Sidebar />
      <Container>{routes()}</Container>
    </GlobalContainer>
  );
}

export default App;
