import { FETCH_DECKS, ADD_DECK } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case FETCH_DECKS :
      return action.decks

    case ADD_DECK :
      return [
        ...state,
        action.deck
      ]

    // case DELETE_DECK:
    //   return action.deck;

    default :
      return state
  }
}

export default decks
