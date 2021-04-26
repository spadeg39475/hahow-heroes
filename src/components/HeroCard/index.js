import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import { selectHero } from 'Reducers/heroReducer';
export default function HeroCard({ id: heroId, name, imageUrl }) {
  const dispatch = useDispatch();

  const handleClickCard = () => {
    dispatch(selectHero(heroId));
  };

  return (
    <>
      <Link to={`/heroes/${heroId}`} onClick={handleClickCard}>
        <Card>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}

HeroCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
};
