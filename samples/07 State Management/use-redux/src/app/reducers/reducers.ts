import {AppState} from '../state/app.state';

export function rootReducer(state: AppState, action): AppState {
  console.log(action);

  if(action.type == "INC") {
    return {
      ... state,
      counter: state.counter + action.steps,
    }
  }
  else if(action.type == "DEC") {
    return {
      ... state,
      counter: state.counter - 1,
    }
  }
  else if(action.type == "SET_CONTACTS") {
    return {
      ... state,
      contacts: action.contacts,
    }
  }
  else if(action.type == "BEGIN_LOADING") {
    return {
      ... state,
      isLoading: true,
    }
  }
  else if(action.type == "END_LOADING") {
    return {
      ... state,
      isLoading: false,
    }
  }

  return state;
}
