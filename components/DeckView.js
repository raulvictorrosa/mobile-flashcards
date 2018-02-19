import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { black, white } from '../utils/colors'

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params.deck

    return {
      title
    }
  }

  render() {
    const { deck } = this.props
    console.log(deck)
    return (
      <View>
        <Text>Deck View - {deck.title}</Text>
        <Text>Deck View - {deck.questions.length}</Text>
      </View>
    )
  }
}

function mapStateToProps(state, { navigation }) {
  const { deck } = navigation.state.params

  return {
    deck
  }
}

// function mapDispatchToProps(dispatch, { navigation }) {
//   const { entryId } = navigation.state.params

//   return {
//     remove: () => dispatch(addEntry({
//       [entryId]: timeToString() === entryId
//         ? getDailyReminderValue()
//         : null
//     })),
//     goBack: () => navigation.goBack(),
//   }
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(DeckView)
