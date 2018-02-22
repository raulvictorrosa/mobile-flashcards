import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import styled from 'styled-components/native';
import { black, dark, white } from '../utils/colors'
import { Button, ButtonOutline } from './Button'

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params.deck

    return {
      title
    }
  }

  addCard = () => {
    this.props.navigation.navigate(
      'AddCard'
    )
  }

  startQuiz = () => {
    console.log('Start Quiz')
  }

  render() {
    const { deck } = this.props
    console.log(deck)
    return (
      <ContainerView>
        <ItemViewText>
          <TextTitleDeck>{deck.title}</TextTitleDeck>
          <TextSubTitleCard>{deck.questions.length} cards</TextSubTitleCard>
        </ItemViewText>
        <ButtonOutline
          onPress={this.props.navigation.navigate('AddCard', {})}
          style={{ height: 55, marginTop: 130, }}
        >
          Add Card
        </ButtonOutline>
        <Button
          onPress={this.startQuiz}
          style={{ height: 55, marginTop: 10, }}
        >
          Start Quiz
        </Button>
      </ContainerView>
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

const ContainerView = styled.View`
  background-color: ${white};
  flex: 1;
  padding: 15px;
  padding-top: 132;
`
const TextTitleDeck = styled.Text`
  color: ${black};
  text-align: center;
  font-size: 40px;
`
const TextSubTitleCard = styled.Text`
  color: #757575;
  font-size: 26px;
  padding-top: 8px;
  text-align: center;
`

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(DeckView)
