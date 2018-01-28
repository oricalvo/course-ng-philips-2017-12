import {AppState} from './state/app.state';
import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './reducers/reducers';
import thunk from 'redux-thunk';

const initialState: AppState = {
  counter: 0,
  contacts: null,
  isLoading: false,
};

export const appStore = createStore(rootReducer, initialState, applyMiddleware(thunk));
