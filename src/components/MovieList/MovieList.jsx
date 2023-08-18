import MovieItem from 'components/MovieItem/MovieItem';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  // console.log('movies: ', movies);

  return (
    <ul>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
