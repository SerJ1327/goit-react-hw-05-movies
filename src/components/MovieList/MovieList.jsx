import MovieItem from 'components/MovieItem/MovieItem';
import PropTypes from 'prop-types';

const MovieList = ({ movies, way }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} way={way} />
      ))}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  way: PropTypes.string,
};
