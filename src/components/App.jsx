import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import NotFound from 'pages/NotFound';

// import Home from 'pages/Home';
// import Movies from 'pages/Movies';

// import Reviews from './Reviews/Reviews';
// import Cast from './Cast/Cast';
// import MovieDetails from 'pages/MovieDetails';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies /:movieId/*" element={<MovieDetails />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
