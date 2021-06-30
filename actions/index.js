export const FETCH_DECKS = 'FETCH_DECKS'
export const FETCH_DECK = 'FETCH_DECK'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export const fetchDecks = (decks) => ({
  type: FETCH_DECKS,
  decks
})

export const fetchDeck = (deck) => ({
  type: FETCH_DECK,
  deck
})

export const addDeck = (deck) => ({
  type: ADD_DECK,
  deck
})

export const addCard = (key, card) => ({
  type: ADD_CARD,
  key,
  card
})
