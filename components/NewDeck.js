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
import {
//   getMetricMetaInfo,
  timeToString,
//   getDailyReminderValue,
//   clearLocalNotification,
//   setLocalNotification
} from '../utils/helpers'
import { submitEntry, removeEntry } from '../api'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { black, purple, white } from '../utils/colors'
import { NavigationActions } from 'react-navigation'

class NewDeck extends React.Component {
  state = {
    title: '',
    error: false,
  }
  // increment = (metric) => {
  //   const { max, step } = getMetricMetaInfo(metric)

  //   this.setState((state) => {
  //     const count = state[metric] + step

  //     return {
  //       ...state,
  //       [metric]: count > max ? max : count,
  //     }
  //   })
  // }
  // decrement = (metric) => {
  //   this.setState((state) => {
  //     const count = state[metric] - getMetricMetaInfo(metric).step

  //     return {
  //       ...state,
  //       [metric]: count < 0 ? 0 : count,
  //     }
  //   })
  // }
  // slide = (metric, value) => {
  //   this.setState(() => ({
  //     [metric]: value
  //   }))
  // }
  handleSubmit = () => {
    const { title } = this.state
    if (title) {
      // this.props.dispatch(addDeck({
      //   [key]: deck
      // }))
      addDeck(title)
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

      // submitEntry({ key, deck })

    //   clearLocalNotification()
    //     .then(setLocalNotification)

    } else {
      this.setState({ error: true })
    }
  }
  toHome = () => {
    this.props.navigation.dispatch(
      NavigationActions.back({ key: 'NewDeck' })
    )
  }
  render() {
    return (
      <ContainerKeyboardAvoidingView behavior='padding'>
        <TitleText>
          What is the title of your new deck?
          {/* {this.state.title} */}
        </TitleText>
        <DeckTitleInput
          placeholder="Deck Title"
          onChangeText={(title) => this.setState({ title })}
          value={this.state.title}
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
  justify-content: center;
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

function mapStateToProps(state) {
  const key = timeToString()

  return {
    alreadyLogged: state[key] && typeof state[key].today === 'undefined'
  }
}

// export default connect(
//   mapStateToProps
// )(NewDeck)
// export default connect(NewDeck)
export default NewDeck
