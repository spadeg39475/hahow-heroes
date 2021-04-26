import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { fetchHeroes } from 'Reducers/heroReducer';
import HeroCard from 'Components/HeroCard';

const ListContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function HeroList() {
  const dispatch = useDispatch();
  const heroList = useSelector((state) => state.hero.list);

  useEffect(() => {
    dispatch(fetchHeroes());
  }, []);

  return (
    <>
      <ListContainer>
        {heroList.map((hero) => {
          const { id, name, image } = hero;
          return <HeroCard key={id} id={id} name={name} imageUrl={image} />;
        })}
      </ListContainer>
    </>
  );
}
