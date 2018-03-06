import React, { Component } from 'react'
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  FlatList
} from 'react-native'
import { connect } from 'react-redux'
import { fetchDecks } from '../actions'
import * as Api from '../api'
import styled from 'styled-components/native';
import { black, white } from '../utils/colors'

class DecksList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    Api.fetchDecks().then((decks) => dispatch(fetchDecks({ decks })))
  }

  renderItem = (deck) => {
    const { title, questions } = deck
    return (
      <TouchableItemDeckView
        onPress={() => this.props.navigation.navigate('DeckView', { title })}
      >
        <TextTitleDeck>{title}</TextTitleDeck>
        <TextSubTitleCard>{questions.length} cards</TextSubTitleCard>
      </TouchableItemDeckView>
    )
  }

  render() {
    const { decks } = this.props
    if (Object.keys(decks).length !== 0 && decks.constructor === Object) {
      const listOfDecks = Object.keys(decks).map(key => decks[key])
      return (
        <ContainerView>
          <FlatList
            data={listOfDecks}
            renderItem={({ item }) => this.renderItem(item)}
            keyExtractor={(item, index) => index}
          />
        </ContainerView>
      )
    }

    return (
      <ContainerView>
        <TouchableItemDeckView>
          <TextTitleDeck>No deck registred.</TextTitleDeck>
          <TextSubTitleCard></TextSubTitleCard>
        </TouchableItemDeckView>
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

const mapStateToProps = (decks) => ({ decks })

export default connect(
  mapStateToProps
)(DecksList)
