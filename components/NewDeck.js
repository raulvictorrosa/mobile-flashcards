import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import styled from 'styled-components/native';
// import {
//   getMetricMetaInfo,
//   timeToString,
//   getDailyReminderValue,
//   clearLocalNotification,
//   setLocalNotification
// } from '../utils/helpers'
// import UdaciSlider from './UdaciSlider'
// import UdaciSteppers from './UdaciSteppers'
// import DateHeader from './DateHeader'
// import { Ionicons } from '@expo/vector-icons'
// import TextButton from './TextButton'
// import { submitEntry, removeEntry } from '../utils/api'
// import { connect } from 'react-redux'
// import { addEntry } from '../actions'
import { black, purple } from '../utils/colors'
// import { NavigationActions } from 'react-navigation'

// function SubmitBtn({ onPress }) {
//   return (
//     <TouchableOpacity
//       style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
//       onPress={onPress}>
//       <Text style={styles.submitBtnText}>SUBMIT</Text>
//     </TouchableOpacity>
//   )
// }

class NewDeck extends Component {
  state = {
    title: '',
    questions: [],
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
  submit = () => {
  //   const key = timeToString()
    const title = this.state

  //   this.props.dispatch(addEntry({
  //     [key]: entry
  //   }))

  //   this.setState(() => ({ run: 0, bike: 0, swim: 0, sleep: 0, eat: 0 }))

  //   this.toHome()

  //   submitEntry({ key, entry })

  //   clearLocalNotification()
  //     .then(setLocalNotification)
  }
  // reset = () => {
  //   const key = timeToString()

  //   this.props.dispatch(addEntry({
  //     [key]: getDailyReminderValue()
  //   }))

  //   this.toHome()

  //   removeEntry(key)
  // }
  // toHome = () => {
  //   this.props.navigation.dispatch(NavigationActions.back({ key: 'AddEntry' }))
  // }
  render() {
    // const metaInfo = getMetricMetaInfo()

    // if (this.props.alreadyLogged) {
    //   return (
    //     <View style={styles.center}>
    //       <Ionicons
    //         name={Platform.OS === 'ios' ? 'ios-happy-outline' : 'md-happy'}
    //         size={100}
    //       />
    //       <Text>You already logged your information for today.</Text>
    //       <TextButton style={{ padding: 10 }} onPress={this.reset}>
    //         Reset
    //       </TextButton>
    //     </View>
    //   )
    // }

    return (
      <ContainerKeyboardAvoidingView behavior='padding'>
        <TitleText>
          What is the title of your new deck?
        </TitleText>
        <DeckTitleInput
          placeholder="Deck Title"
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        {Platform.OS === 'ios'
          ? <IosSubmitBtn onPress={this.submit}>
              <SubmitBtnText>Submit</SubmitBtnText>
            </IosSubmitBtn>
          : <AndroidSubmitBtn onPress={this.submit}>
              <SubmitBtnText>Submit</SubmitBtnText>
            </AndroidSubmitBtn>
        }
      </ContainerKeyboardAvoidingView>
    )
  }
}

const ContainerKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: white;
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
  color: white;
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
export default NewDeck
