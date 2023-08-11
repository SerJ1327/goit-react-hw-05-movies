import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

const StyledLogo = styled.p`
  font-weight: 700;
  margin: 0;
`;

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export { StyledContainer, StyledHeader, StyledLogo, StyledLink };
