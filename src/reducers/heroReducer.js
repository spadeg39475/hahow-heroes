const initState = {
  list: [],
  selectedHeroId: '0',
  profiles: {},
};

const SET_HEROES = 'SET_HEROES';
const SELECT_HERO = 'SELECT_HERO';
const SET_PROFILE = 'SET_PROFILE';

function setHeroes(heroes) {
  return {
    type: SET_HEROES,
    payload: { heroes },
  };
}

export function fetchHeroes() {
  return (dispatch) => {
    return fetch('https://hahow-recruit.herokuapp.com/heroes')
      .then((res) => res.json())
      .then((heroes) => dispatch(setHeroes(heroes)));
  };
}

export function selectHero(heroId) {
  return {
    type: SELECT_HERO,
    payload: heroId,
  };
}

export function setProfile(heroId, profile) {
  return {
    type: SET_PROFILE,
    payload: { heroId, profile },
  };
}

export function fetchHeroProfile(heroId) {
  return (dispatch) => {
    return fetch(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`)
      .then((res) => res.json())
      .then((profile) => dispatch(setProfile(heroId, profile)));
  };
}

export function patchHeroProfile(heroId, profile) {
  return () => {
    return fetch(
      `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`,
      {
        method: 'PATCH',
        body: JSON.stringify(profile),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };
}

export default function heroReducer(state = initState, action) {
  switch (action.type) {
    case SET_HEROES:
      return { ...state, list: action.payload.heroes };

    case SELECT_HERO:
      return {
        ...state,
        selectedHeroId: action.payload,
      };

    case SET_PROFILE:
      return {
        ...state,
        profiles: {
          ...state.profiles,
          [action.payload.heroId]: action.payload.profile,
        },
      };

    default:
      return state;
  }
}
