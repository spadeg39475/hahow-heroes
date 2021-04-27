import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchHeroes } from 'Reducers/heroReducer';
import HeroCard from 'Components/HeroCard';
import Spinner from 'Components/Spinner';

import { HeroListContainer } from './style.js';

export default function HeroList() {
  const dispatch = useDispatch();
  const heroList = useSelector((state) => state.hero.list);
  const selectedHeroId = useSelector((state) => state.hero.selectedHeroId);
  const isLoading = heroList.length === 0;

  useEffect(() => {
    dispatch(fetchHeroes());
  }, []);

  return (
    <>
      <HeroListContainer>
        {isLoading && <Spinner />}
        {heroList.map((hero) => {
          const { id, name, image } = hero;

          return (
            <HeroCard
              key={id}
              id={id}
              name={name}
              imageUrl={image}
              selectedHeroId={selectedHeroId}
            />
          );
        })}
      </HeroListContainer>
    </>
  );
}
