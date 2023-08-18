import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { getMovieReviews } from 'services/api';

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

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reviewsData, setReviewsData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchReviewsData = async () => {
      try {
        setIsLoading(true);
        const ReviewsData = await getMovieReviews(`movie/${movieId}/reviews`);
        setReviewsData(ReviewsData.results);
      } catch (error) {
        toast.error(
          `Opps, some error occured. Please, try again later. Error: ${error.message}`,
          toastConfig
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviewsData();
  }, [movieId]);

  console.log('reviewsData: ', reviewsData);
  return (
    <>
      {isLoading && <Loader />}
      <ul>
        {!reviewsData ? (
          <p>We don`t have any reviews for this movie</p>
        ) : (
          reviewsData.map(review => {
            return (
              <li key={review.id}>
                <h3>{`Autor: ${review.author}`}</h3>
                <p> {review.content} </p>
              </li>
            );
          })
        )}
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

export default Reviews;
