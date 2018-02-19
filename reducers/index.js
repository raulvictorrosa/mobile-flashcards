import { FETCH_DECKS, FETCH_DECK, ADD_DECK } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case FETCH_DECKS :
      return action.decks

    case FETCH_DECK :
      return {
        ...state,
        ...action.deck
      }

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
