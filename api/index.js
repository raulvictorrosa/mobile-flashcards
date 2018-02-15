import { AsyncStorage } from 'react-native'

export const FLASHCARDS_STORAGE_KEY = 'MobileFlashcards:decks'

export function getDecks() {
  return AsyncStorage.getAllKeys(FLASHCARDS_STORAGE_KEY).then(keys => {
    return AsyncStorage.multiGet(keys).then(stores => {
      return stores.map((result, i, store) => {
        // get at each store's key/value so you can work with it
        let key = store[i][0];
        let value = JSON.parse(store[i][1]);
        if (value) {
          return {
            key,
            title: value.title,
            questions: value.questions
          };
        }
      }).filter(items => {
        if (items) {
          return typeof items.questions !== 'undefined'
        }
      })
    })
  })

  // AsyncStorage.getAllKeys((err, keys) => {
  //   AsyncStorage.multiGet(keys, (err, stores) => {
  //     stores.map((result, i, store) => {
  //       // get at each store's key/value so you can work with it
  //       let key = store[i][0];
  //       let value = store[i][1];
  //     });
  //   });
  // });
}

export function addDeck(title) {
  try {
    return AsyncStorage.setItem(title, JSON.stringify({ title, questions: [] }));
  } catch (error) {
    console.log(error);
  }
}

export function submitEntry({ deck, key }) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }))
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
