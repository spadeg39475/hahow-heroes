import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import * as reducers from 'Reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
