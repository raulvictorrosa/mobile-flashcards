import { AsyncStorage } from 'react-native'

export const CALENDAR_STORAGE_KEY = 'UdaciFitness:calendar'

// function formatCalendarResults(results) {
//   return results === null
//     ? setDummyData()
//     : setMissingDates(JSON.parse(results))
// }

// export function fetchDecks() {
//   return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
//     .then(
//       results === null
//         ? setDummyData()
//         : setMissingDates(JSON.parse(results))
//     )
// }

export function submitEntry({ deck, key }) {
  return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }))
}

export function removeEntry(key) {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
    })
}
