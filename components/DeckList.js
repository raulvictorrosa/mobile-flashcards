import React, { Component } from 'react'
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  FlatList
} from 'react-native'
import styled from 'styled-components/native';
import { connect } from 'react-redux'
import { fetchDecks } from '../actions'
import * as Api from '../api'
import { black, white } from '../utils/colors'
// import { AppLoading } from 'expo'

class DecksList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    Api.fetchDecks().then((decks) => dispatch(fetchDecks({decks})))
    // .then(() => this.setState(() => ({ ready: true })))
    // Api.fetchDecks()
  }

  // onPress = () => {
  //   this.props.navigate(SCREENS.DECK_BOARD, { deck: deck.title })
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }

  // renderItem = ({ item }) => {
  //   return (
  //     <ItemDeckView key={item.title} onPress={this.onPress}>
  //       <TextTitleDeck>{item.title}</TextTitleDeck>
  //       <TextSubTitleCard>{item.questions.length} cards</TextSubTitleCard>
  //     </ItemDeckView>
  //   )
  // }

  render() {
    const { decks } = this.props
    console.log(decks)
    return (
      <ContainerView>
        {/* <TextTitleDeck>{this.state.count}</TextTitleDeck> */}
        {decks.length < 0 || decks.length == undefined
          ? <ItemDeckView>
              <TextTitleDeck>No deck registred.</TextTitleDeck>
              <TextSubTitleCard></TextSubTitleCard>
            </ItemDeckView>
          : <FlatList
            data={decks}
            renderItem={({item}) =>
              <ItemDeckView key={item.title} onPress={this.onPress}>
                <TextTitleDeck>{item.title}</TextTitleDeck>
                <TextSubTitleCard>{item.questions.length} cards</TextSubTitleCard>
              </ItemDeckView>
            }
          />
        }
      </ContainerView>
    )
  }
}

const ContainerView = styled.View`
  flex: 1;
  padding-bottom: 40;
`
const ItemDeckView = styled.TouchableOpacity`
  background-color: ${white};
  border-radius: ${Platform.OS === 'ios' ? 16 : 2};
  padding: 20px;
  margin-left: 10;
  margin-right: 10;
  margin-top: 17;
  justify-content: center;
  shadow-radius: 3px;
  shadow-opacity: 0.8;
  shadow-color: rgba(0, 0, 0, 0.24);
  shadow-offset: 0px 3px;
`
const TextTitleDeck = styled.Text`
  color: ${black};
  text-align: center;
  font-size: 24px;
  padding-top: 20;
`
const TextSubTitleCard = styled.Text`
  color: #757575;
  text-align: center;
  font-size: 18px;
  padding-top: 20;
`

// function mapStateToProps({ decks, questions }) {
//   if (decks == undefined)
//     console.log('teste')

//   return {
//     decks: decks.map(title => ({
//       title,
//       questions: questions.filter(question => question.deck === title)
//     }))
//   }
// }
function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(
  mapStateToProps,
)(DecksList)
