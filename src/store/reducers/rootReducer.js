import { combineReducers } from 'redux';

import { amiiboReducer as amiibo } from './amiibo/index';

const entities = combineReducers({
  amiibo
});

export default entities;
