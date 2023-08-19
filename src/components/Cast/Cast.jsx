import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { getCastData } from 'services/api';
import { StyledActorImg } from './Cast.styled';

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

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [castDetails, setCastDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchCastData = async () => {
      try {
        setIsLoading(true);
        const castData = await getCastData(`movie/${movieId}/credits`);
        setCastDetails(castData.cast);
      } catch (error) {
        toast.error(
          `Opps, some error occured. Please, try again later. Error: ${error.message}`,
          toastConfig
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchCastData();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <ul>
        {castDetails?.length > 0 &&
          castDetails.map(actor => {
            return (
              <li key={actor.id}>
                <StyledActorImg
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.character}
                />
                <p>{actor.name}</p>
                <p> {`Character: ${actor.character}`} </p>
              </li>
            );
          })}
      </ul>

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

export default Cast;
