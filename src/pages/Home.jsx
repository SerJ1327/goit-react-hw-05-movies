import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { getTrendingAllDay } from 'services/api';
import { toastConfig } from 'services/toastconfig';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [trandMovies, setTrandMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const movies = await getTrendingAllDay('trending/movie/day');

        setTrandMovies(movies.results);
      } catch (error) {
        toast.error(
          `Opps, some error occured. Please, try again later. Error: ${error.message}`,
          toastConfig
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <h1>Trending today</h1>
      <MovieList movies={trandMovies} way={'/movies/'} />
      <ToastContainer
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

export default Home;
