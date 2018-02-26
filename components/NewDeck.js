import React from 'react'
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native'
import styled from 'styled-components/native';
import * as Api from '../api'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { black, purple, white } from '../utils/colors'
import { NavigationActions } from 'react-navigation'
import { Button } from './Button'

class NewDeck extends React.Component {
  state = {
    title: '',
    error: false,
  }

  handleSubmit = () => {
    const { dispatch, navigate, goBack } = this.props
    const { title } = this.state
    if (title !== '') {
      const deck = {
        title,
        questions: []
      }

      dispatch(addDeck(deck))
      this.setState(() => ({ title: '' }))
      navigate('DeckView', { key: deck.title })

      Keyboard.dismiss()
      Api.addDeck(deck)

      //   clearLocalNotification()
      //     .then(setLocalNotification)
    } else {
      alert(`The title of the deck can't be empty!`)
    }
  }

  render() {
    const { title } = this.state
    return (
      <ContainerKeyboardAvoidingView behavior='padding'>
        <TitleText>
          What is the title of your new deck?
        </TitleText>
        <DeckTitleInput
          placeholder="Deck Title"
          onChangeText={(title) => this.setState({ title })}
          value={title}
        />
        <Button onPress={this.handleSubmit}>
          Submit
        </Button>
      </ContainerKeyboardAvoidingView>
    )
  }
}

function mapDispatchToProps(dispatch, { navigation }) {
  return {
    navigate: (navigateTo, params) => navigation.navigate(navigateTo, params),
  }
}

const ContainerKeyboardAvoidingView = styled.KeyboardAvoidingView`
  background-color: ${white};
  flex: 1;
  padding: 20px;
`
const TitleText = styled.Text`
  color: ${black};
  font-size: 40px;
  padding-bottom: 40;
  padding-top: 20;
  text-align: center;
`
const DeckTitleInput = styled.TextInput`
  border-color: ${black};
  border-radius: 6;
  border-width: 1;
  height: 40;
  padding-bottom: 2;
  padding-left: 4;
  padding-right: 4;
  padding-top: 2;
`

export default connect(
  mapDispatchToProps
)(NewDeck)
