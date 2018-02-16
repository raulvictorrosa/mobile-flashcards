import React from 'react'
import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Platform
} from 'react-native'
import styled from 'styled-components/native';
import * as Api from '../api'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { black, purple, white } from '../utils/colors'
import { NavigationActions } from 'react-navigation'

class NewDeck extends React.Component {
  state = {
    title: '',
    error: false,
  }
  handleSubmit = () => {
    const { title } = this.state
    const deck = {
      title,
      questions: []
    }
    this.props.dispatch(addDeck(deck))
    this.setState(() => ({ title: '' }))
    this.toHome()
    // this.props.navigation.navigate(
    //   'DeckDetail',
    //   {
    //     entryId: titleText,
    //     navTitle: titleText
    //   },
    Keyboard.dismiss()
    // )

    Api.addDeck(title)

  //   clearLocalNotification()
  //     .then(setLocalNotification)
  }
  toHome = () => {
    this.props.navigation.dispatch(
      NavigationActions.back({ key: 'NewDeck' })
    )
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
        {Platform.OS === 'ios'
          ? <IosSubmitBtn onPress={this.handleSubmit}>
              <SubmitBtnText>Submit</SubmitBtnText>
            </IosSubmitBtn>
          : <AndroidSubmitBtn onPress={this.handleSubmit}>
              <SubmitBtnText>Submit</SubmitBtnText>
            </AndroidSubmitBtn>
        }
      </ContainerKeyboardAvoidingView>
    )
  }
}

const ContainerKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${white};
  padding: 20px;
`
const TitleText = styled.Text`
  color: ${black};
  fontSize: 40;
  textAlign: center;
  paddingTop: 20;
  paddingBottom: 40;
`
const DeckTitleInput = styled.TextInput`
  height: 40;
  border-radius: 6;
  border-color: ${black};
  border-width: 1;
  padding-top: 2;
  padding-bottom: 2;
  padding-left: 4;
  padding-right: 4;
`
const IosSubmitBtn = styled.TouchableOpacity`
  backgroundColor: ${black};
  padding: 10px;
  border-radius: 7;
  height: 45;
  margin-left: 40;
  margin-right: 40;
  margin-top: 40;
`
const AndroidSubmitBtn = styled.TouchableOpacity`
  backgroundColor: ${black};
  padding: 10px;
  padding-left: 30;
  padding-right: 30;
  height: 45;
  border-radius: 4;
  margin-top: 40;
  align-self: center;
  justify-content: center;
  align-items: center;
`
const SubmitBtnText = styled.Text`
  color: ${white};
  font-size: 22;
  text-align: center;
`

export default connect()(NewDeck)
