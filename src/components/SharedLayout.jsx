import { Outlet } from 'react-router-dom';
import {
  StyledContainer,
  StyledHeader,
  StyledLink,
  StyledLogo,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledLogo>698756</StyledLogo>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movie</StyledLink>
        </nav>
      </StyledHeader>
      <Outlet />
    </StyledContainer>
  );
};

export default SharedLayout;
