import React from 'react'
import { Alert, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { addDeck } from '../actions'
import * as Api from '../api'
import { black, white } from '../utils/colors'
import { Button } from './Button'

class NewDeck extends React.Component {
  state = {
    title: '',
    error: false
  }

  handleSubmit = () => {
    const { dispatch } = this.props
    const { navigate } = this.props.navigation
    const { title } = this.state
    if (title !== '') {
      Api.addDeck(title)
      dispatch(
        addDeck({
          [title]: {
            title,
            questions: []
          }
        })
      )

      this.setState(() => ({ title: '' }))
      navigate('DeckView', { title })

      Keyboard.dismiss()
    } else {
      Alert.alert('', `The title of the deck can't be empty!`, [
        { text: 'Close' }
      ])
    }
  }

  render() {
    const { title } = this.state
    return (
      <ContainerKeyboardAvoidingView behavior="padding">
        <TitleText>What is the title of your new deck?</TitleText>
        <DeckTitleInput
          placeholder="Deck Title"
          onChangeText={(title) => this.setState({ title })}
          value={title}
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

export default connect()(NewDeck)
