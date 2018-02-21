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

class DecksList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    Api.fetchDecks().then((decks) => dispatch(fetchDecks({decks})))
  }

  onPress = (deck) => {
    this.props.navigation.navigate(
      'DeckView',
      { deck }
    )
  }

  renderItem = (deck) => {
    return (
      <TouchableItemDeckView
        onPress={() => this.onPress(deck)}
      >
        <TextTitleDeck>{deck.title}</TextTitleDeck>
        <TextSubTitleCard>{deck.questions.length} cards</TextSubTitleCard>
      </TouchableItemDeckView>
    )
  }

  render() {
    const { decks } = this.props
    return (
      <ContainerView>
        {decks.length < 0 || decks.length == undefined
          ? <TouchableItemDeckView>
              <TextTitleDeck>No deck registred.</TextTitleDeck>
              <TextSubTitleCard></TextSubTitleCard>
            </TouchableItemDeckView>
          : <FlatList
              data={decks}
              renderItem={({ item }) => this.renderItem(item)}
              keyExtractor={(item, index) => index}
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
const TouchableItemDeckView = styled.TouchableOpacity`
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

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(
  mapStateToProps,
)(DecksList)
