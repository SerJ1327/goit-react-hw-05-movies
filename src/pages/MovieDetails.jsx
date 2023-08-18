import { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { getMovieDetails } from 'services/api';
import {
  StyledGenresDiv,
  StyledHeroWrapper,
  StyledInfoWrapper,
  StyledPosterImg,
} from './MovieDetails.styled';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const { useParams } = require('react-router-dom');

const toastConfig = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieData = async () => {
      try {
        setIsLoading(true);
        const movieData = await getMovieDetails(`movie/${movieId}`);
        setMovieDetails(movieData);
      } catch (error) {
        toast.error(
          `Opps, some error occured. Please, try again later. Error: ${error.message}`,
          toastConfig
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieData();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {movieDetails !== null && (
        <section>
          <button>Повернутися</button>
          <StyledHeroWrapper>
            <StyledPosterImg
              src={`https://www.themoviedb.org/t/p/w500${movieDetails.poster_path}`}
              alt=""
            />
            <div>
              <h2>
                {movieDetails.original_title}(
                {movieDetails.release_date.slice(0, 4)})
              </h2>
              <p>User Score: {Math.round(movieDetails.vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{movieDetails.overview}</p>
              <h3>Genres</h3>
              <StyledGenresDiv>
                {movieDetails.genres.map(genre => (
                  <span key={genre.name}>{genre.name} </span>
                ))}
              </StyledGenresDiv>
            </div>
          </StyledHeroWrapper>
          <StyledInfoWrapper>
            <h4>Additional information</h4>
            <ul>
              <li>
                <NavLink to={'cast'}>Cast </NavLink>
              </li>
              <li>
                <NavLink to={'reviews'}>Reviews</NavLink>
              </li>
            </ul>
          </StyledInfoWrapper>
        </section>
      )}

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>

      <ToastContainer
        movies
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
export default MovieDetails;
