import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import {
  fetchHeroProfile,
  setProfile,
  patchHeroProfile,
} from 'Reducers/heroReducer';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: 40px;
`;

const abilities = ['str', 'int', 'agi', 'luk'];

export default function HeroProfile() {
  const { heroId } = useParams();
  const dispatch = useDispatch();
  const hero = useSelector((state) => state.hero);
  const heroProfile = useSelector((state) => state.hero.profiles[heroId]);
  const [restPoints, setRestPoints] = useState(0);

  useEffect(() => {
    if (!heroProfile) {
      dispatch(fetchHeroProfile(heroId));
    }
  }, [heroId, heroProfile]);

  if (!heroProfile) {
    return 'loading';
  }

  const addAbility = (ability) => () => {
    const newProfile = { ...heroProfile, [ability]: heroProfile[ability] + 1 };
    dispatch(setProfile(heroId, newProfile));
    setRestPoints(restPoints - 1);
  };

  const reduceAbility = (ability) => () => {
    const newProfile = { ...heroProfile, [ability]: heroProfile[ability] - 1 };
    dispatch(setProfile(heroId, newProfile));
    setRestPoints(restPoints + 1);
  };

  const handleClickSaveProfile = async () => {
    if (restPoints !== 0) return;

    const res = await dispatch(patchHeroProfile(heroId, heroProfile));
  };

  return (
    <>
      <Container>
        {abilities.map((abi) => (
          <Row key={abi}>
            <div>{abi.toUpperCase()}</div>
            <button onClick={addAbility(abi)} disabled={restPoints === 0}>
              +
            </button>
            <div>{heroProfile[abi]}</div>
            <button
              onClick={reduceAbility(abi)}
              disabled={heroProfile[abi] === 0}
            >
              -
            </button>
          </Row>
        ))}

        <div>剩餘點數：{restPoints}</div>
        <button onClick={handleClickSaveProfile}>儲存</button>
      </Container>
    </>
  );
}
