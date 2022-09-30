import styled from 'styled-components';
import InvoicerLogo from '../assets/Invoicer-logo.png';
const StyledLogo = styled.img`
  padding: 5px;
`;

export const Logo = (): JSX.Element => {
  return <StyledLogo src={InvoicerLogo} alt="Invoicer logo" />;
};
