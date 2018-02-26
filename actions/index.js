export const FETCH_DECKS = 'FETCH_DECKS'
export const FETCH_DECK = 'FETCH_DECK'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function fetchDecks (decks) {
  return {
    type: FETCH_DECKS,
    decks,
  }
}

export function fetchDeck (deck) {
  return {
    type: FETCH_DECK,
    deck,
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function addCard (key, cards) {
  return {
    type: ADD_CARD,
    key,
    cards
  }
}
