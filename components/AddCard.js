import React, { Component } from 'react'
import {
  Alert,
  KeyboardAvoidingView,
  Keyboard,
  TextInput,
} from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../actions';
import { addCardToDeck } from '../api'
import styled from 'styled-components/native';
import { black, dark, white } from '../utils/colors'
import { Button, ButtonOutline } from './Button'

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  handleSubmit = () => {
    const { add } = this.props
    const card = this.state

    if (card.question == '') {
      Alert.alert(
        '', `The question field can't be empty 😊`,
        [{ text: 'Close' }]
      )
    } else if (card.answer == '') {
      Alert.alert(
        '', `The answer field can't be empty 😊`,
        [{ text: 'Close' }]
      )
    } else {
      const { title } = this.props
      addCardToDeck(title, card)
      add(title, card)

      this.setState(() => ({
        question: '',
        answer: ''
      }))

      Keyboard.dismiss()
      Alert.alert(
        '', `Question added with success! 👍`,
        [{ text: 'Close' }]
      )
    }
  }

  render () {
    const { question, answer } = this.state
    return (
      <ContainerKeyboardAvoidingView behavior='padding'>
        <DeckInput
          placeholder="Your question"
          onChangeText={(question) => this.setState({ question })}
          value={question}
          style={{ marginBottom: 40 }}
        />
        <DeckInput
          placeholder="The answer"
          onChangeText={(answer) => this.setState({ answer })}
          value={answer}
        />
        <Button onPress={this.handleSubmit}>Submit</Button>
      </ContainerKeyboardAvoidingView>
    )
  }
}

const ContainerKeyboardAvoidingView = styled.KeyboardAvoidingView`
  background-color: ${white};
  flex: 1;
  padding: 20px;
`
const DeckInput = styled.TextInput`
  border-color: ${black};
  border-radius: 6;
  border-width: 1;
  height: 40;
  padding-bottom: 2;
  padding-left: 4;
  padding-right: 4;
  padding-top: 2;
`

function mapStateToProps(state, { navigation }) {
  const { title } = navigation.state.params
  return {
    title
  }
}

function mapDispatchToProps(dispatch, { navigation }) {
  return {
    add: (key, card) => dispatch(addCard(key, card)),
    navigate: (navigateTo, params) => navigation.navigate(navigateTo, params)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard)
