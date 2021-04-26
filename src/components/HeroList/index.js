import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchHeroes } from 'Reducers/heroReducer';

export default function HeroList() {
  const dispatch = useDispatch();
  const heroList = useSelector((state) => state.hero.list);

  useEffect(() => {
    dispatch(fetchHeroes());
  }, []);

  console.log('heroList', heroList);

  return <>test</>;
}
