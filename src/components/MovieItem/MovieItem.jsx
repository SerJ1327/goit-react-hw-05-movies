import { PropTypes } from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MovieItem = ({ movie: { id, title }, way }) => {
  const location = useLocation();
  return (
    <li>
      <Link to={`${way}${id}`} state={{ from: location }}>
        {title}{' '}
      </Link>
    </li>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  way: PropTypes.string,
};
