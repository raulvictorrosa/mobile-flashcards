import { FETCH_DECKS, ADD_ENTRY } from '../actions'

function entries (state = {}, action) {
  switch (action.type) {
    case FETCH_DECKS :
      return {
        ...state,
        ...action.entries,
      }
    case ADD_DECK :
      return {
        ...state,
        ...action.deck
      }
    default :
      return state
  }
}

export default entries
