import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';

import { selectHero } from 'Reducers/heroReducer';

import { StyledLink, StyledCard } from './style';
export default function HeroCard({
  id: heroId,
  name,
  imageUrl,
  selectedHeroId,
}) {
  const dispatch = useDispatch();

  const handleClickCard = () => {
    dispatch(selectHero(heroId));
  };

  return (
    <>
      <StyledLink to={`/heroes/${heroId}`} onClick={handleClickCard}>
        <StyledCard selected={heroId === selectedHeroId}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </StyledCard>
      </StyledLink>
    </>
  );
}

HeroCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
};
