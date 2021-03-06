import { AsyncStorage } from 'react-native'

export const FLASHCARDS_STORAGE_KEY = '@MobileFlashcards:decks'

export const fetchDecks = () => {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then((decks) =>
    JSON.parse(decks)
  )
}

export const getDeck = (key) => {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(
    (decks) => JSON.parse(decks)[key]
  )
}

export const addDeck = (title) => {
  return AsyncStorage.mergeItem(
    FLASHCARDS_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title,
        questions: []
      }
    })
  )
}

export const addCardToDeck = (key, cards) => {
  return getDeck(key).then((deck) => {
    deck.questions.push(card)
    AsyncStorage.mergeItem(
      FLASHCARDS_STORAGE_KEY,
      JSON.stringify({
        [key]: deck
      })
    )
  })
}

export const removeAllDecks = (key) => {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then((results) => {
    const deck = JSON.parse(results)
    deck[key] = undefined
    delete deck[key]
    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
  })
}
