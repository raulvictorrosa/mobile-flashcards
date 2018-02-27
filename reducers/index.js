import { FETCH_DECKS, FETCH_DECK, ADD_DECK, ADD_CARD } from '../actions'

const decks = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DECKS:
      return {
        ...state,
        ...action.decks
      }

    case FETCH_DECK:
      return {
        ...state,
        ...action.deck
      }

    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }

    case ADD_CARD:
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          questions: [
            ...state[action.key].questions,
            action.card
          ]
        }
      }

    // case DELETE_ALL_DECKS:
    //   return {}

    default:
      return state
  }
}

export default decks
