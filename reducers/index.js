import { FETCH_DECKS, FETCH_DECK, ADD_DECK, ADD_CARD } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case FETCH_DECKS :
      return [
        ...state,
        action.decks
      ]

    case FETCH_DECK :
      return {
        ...state,
        ...action.deck
      }

    case ADD_DECK :
      const { deck } = action
      return {
        ...state,
        [deck.title]: {
          ...deck
        }
      }

    case ADD_CARD :
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          questions: [
            ...action.cards
          ]
        }
      }

    // case DELETE_DECK:
    //   return action.deck;

    default :
      return state
  }
}

export default decks
