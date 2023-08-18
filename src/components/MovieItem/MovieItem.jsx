import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <li>
      <Link to={`movies/${movie.id}`}>{movie.title} </Link>
    </li>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
};
