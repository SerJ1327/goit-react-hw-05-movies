import { getTrendingAllDay } from 'components/services/api';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const Home = () => {
  const [trandMovies, setTrandMovies] = useState([]);

  useEffect(() => {
    async function getTranding() {
      //! setIsLoading(true);
      try {
        const movies = await getTrendingAllDay();
        setTrandMovies(movies);
      } catch (error) {
        toast.error(
          `Opps, some error occured. Please, try again later. Error: ${error.message}`,
          toastConfig
        );
      } finally {
        //! setIsLoading(false);
      }
    }
    getTranding();
  }, []);

  if (trandMovies) {
    console.log('trandMovies.results: ', trandMovies.results);
  }

  return (
    <>
      <h1>Trending today</h1>

      <ul>
        {trandMovies &&
          trandMovies.results.map(movie => (
            <li key={movie.id}>{movie.original_title}</li>
          ))}
      </ul>

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
