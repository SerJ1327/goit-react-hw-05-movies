import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';

import Home from 'pages/Home';
import Movies from 'pages/Movies';

import Reviews from './Reviews/Reviews';
import NotFound from 'pages/NotFound';
import Cast from './Cast/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}>
          <Route path=":movieId">
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
