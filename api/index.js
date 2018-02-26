import { AsyncStorage } from 'react-native'

export function fetchDecks() {
  return AsyncStorage.getAllKeys().then(keys => {
    return AsyncStorage.multiGet().then(stores => {
      return stores.map((result, i, store) => {
        // get at each store's key/value so you can work with it
        let key = store[i][0];
        let value = JSON.parse(store[i][1]);
      })
    })
  })
}

export function getDeck(key) {
  return AsyncStorage.getItem(key)
}

export function addDeck(deck) {
  try {
    return AsyncStorage.setItem(
      deck.title,
      JSON.stringify( deck )
    )
  } catch (error) {
    console.log(error);
  }
}

export function addCardToDeck(key, cards) {
  console.log(key)
  console.log(cards)
  console.log(AsyncStorage.getItem(key))
  // try {
  //   return getDeck(key).then(result => {
  //     const value = JSON.parse(result)
  //     let { questions } = value
  //     questions = cards

  //     AsyncStorage.mergeItem(key, JSON.stringify({
  //       questions
  //     }))
  //   })
  // } catch (error) {
  //   console.log(error);
  // }
}

export function removeEntry(key) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      const deck = JSON.parse(results)
      deck[key] = undefined
      delete deck[key]
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
    })
}
