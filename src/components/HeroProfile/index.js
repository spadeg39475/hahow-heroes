import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchHeroProfile, patchHeroProfile } from 'Reducers/heroReducer';
import {
  Container,
  ContainerLeft,
  ContainerRight,
  Row,
  ButtonSave,
  ButtonPlus,
  ButtonMinus,
} from './style';

const abilities = ['str', 'int', 'agi', 'luk'];

export default function HeroProfile() {
  const { heroId } = useParams();
  const dispatch = useDispatch();
  const heroProfile = useSelector((state) => state.hero.profiles[heroId]);
  const [restPoints, setRestPoints] = useState(0);
  const [currentProfile, setCurrentProfile] = useState(
    heroProfile || { str: 0, int: 0, agi: 0, luk: 0 }
  );

  useEffect(() => {
    if (!heroProfile) {
      dispatch(fetchHeroProfile(heroId));
    } else {
      setCurrentProfile(heroProfile);
    }

    return () => setRestPoints(0);
  }, [heroId, heroProfile, heroId]);

  const addAbility = (ability) => () => {
    const newProfile = {
      ...currentProfile,
      [ability]: currentProfile[ability] + 1,
    };
    setCurrentProfile(newProfile);
    setRestPoints(restPoints - 1);
  };

  const reduceAbility = (ability) => () => {
    const newProfile = {
      ...currentProfile,
      [ability]: currentProfile[ability] - 1,
    };
    setCurrentProfile(newProfile);
    setRestPoints(restPoints + 1);
  };

  const handleClickSaveProfile = async () => {
    if (restPoints !== 0) return;

    const res = await dispatch(patchHeroProfile(heroId, currentProfile));

    if (res.status === 200) {
      dispatch(fetchHeroProfile(heroId));
    }
  };

  if (!heroProfile) {
    return 'loading';
  }

  return (
    <Container>
      <ContainerLeft>
        {abilities.map((abi) => (
          <AbilityRow
            key={abi}
            ability={abi}
            restPoints={restPoints}
            currentProfile={currentProfile}
            addAbility={addAbility(abi)}
            reduceAbility={reduceAbility(abi)}
          />
        ))}
      </ContainerLeft>
      <ContainerRight>
        <div className="rest-points">剩餘點數：{restPoints}</div>
        <ButtonSave variant="primary" onClick={handleClickSaveProfile}>
          儲存
        </ButtonSave>
      </ContainerRight>
    </Container>
  );
}

function AbilityRow({
  ability,
  restPoints,
  currentProfile,
  addAbility,
  reduceAbility,
}) {
  return (
    <Row key={ability}>
      <div className="ability-title">{ability.toUpperCase()}</div>
      <ButtonPlus onClick={addAbility} disabled={restPoints === 0}>
        +
      </ButtonPlus>
      <div className="ability-value">{currentProfile[ability]}</div>
      <ButtonMinus
        onClick={reduceAbility}
        disabled={currentProfile[ability] === 0}
      >
        -
      </ButtonMinus>
    </Row>
  );
}

AbilityRow.propTypes = {
  ability: PropTypes.string,
  restPoints: PropTypes.number,
  currentProfile: PropTypes.object,
  addAbility: PropTypes.func,
  reduceAbility: PropTypes.func,
};
