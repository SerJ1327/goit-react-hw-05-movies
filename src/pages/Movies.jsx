import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { getSearchMovies } from 'services/api';
import { toastConfig } from 'services/toastconfig';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('query');
  console.log('searchTerm: ', searchTerm);

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm) return;
    const fetchSearchMovie = async () => {
      try {
        setIsLoading(true);
        const searchMovies = await getSearchMovies('search/movie', searchTerm);

        setFilteredMovies(searchMovies.results);
      } catch (error) {
        toast.error(
          `Opps, some error occured. Please, try again later. Error: ${error.message}`,
          toastConfig
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearchMovie();
  }, [searchTerm]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const searchValue = evt.target.children.search.value;
    setSearchParams({ query: searchValue });
  };

  console.log('filteredMovies: ', filteredMovies);
  return (
    <>
      {isLoading && <Loader />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter your query..."
          required
          minLength={2}
        />
        <button type="submit">Search</button>
      </form>

      {filteredMovies?.length > 0 && <MovieList movies={filteredMovies} />}
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

export default Movies;
