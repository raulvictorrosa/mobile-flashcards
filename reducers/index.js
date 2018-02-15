// import { combineReducers } from 'redux';

import { FETCH_DECKS } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case FETCH_DECKS :
      return {
        ...state,
        ...action.decks,
      }

    // case ADD_DECK :
    //   return {
    //     ...state,
    //     ...action.deck
    //   }

    // case DELETE_DECK:
    //   return action.deck;

    default :
      return state
  }
}

// export default combineReducers({
//   decks
// })
export default decks
