import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  StyledContainer,
  StyledHeader,
  StyledHeadeList,
  StyledLink,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <nav>
          <StyledHeadeList>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movie</StyledLink>
            </li>
          </StyledHeadeList>
        </nav>
      </StyledHeader>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </StyledContainer>
  );
};

export default SharedLayout;
