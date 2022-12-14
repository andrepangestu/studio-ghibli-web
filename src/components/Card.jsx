import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

function Card({
  filmKey,
  title,
  release,
  image,
}) {
  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
  };
  return (
    <Link to={`/detail/${filmKey}`} key={filmKey}>
      <div className="Card" key={filmKey} style={imageStyle}>
        <FontAwesomeIcon icon={faCircleArrowRight} className="CircleArrow" />
        <div className="CardDescription">
          <h3>{title}</h3>
          <p>{release}</p>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  filmKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
