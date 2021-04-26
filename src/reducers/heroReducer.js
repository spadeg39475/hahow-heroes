const initState = {
  list: [],
  profiles: {},
};

const SET_HEROES = 'SET_HEROES';

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

export default function heroReducer(state = initState, action) {
  switch (action.type) {
    case SET_HEROES:
      return { ...state, list: action.payload.heroes };

    default:
      return state;
  }
}
