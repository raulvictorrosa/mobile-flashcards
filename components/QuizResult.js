import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { fetchDeck } from '../actions';
import { getDeck } from '../api'
import styled from 'styled-components/native';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { black, red, white } from '../utils/colors'
import { Button, ButtonOutline } from './Button'

class QuizView extends Component {
  componentDidMount() {
    //It clears today notification and sets tomorrow notification
    clearLocalNotification()
      .then(setLocalNotification)
  }

  render() {
    const {
      correctAnswers,
      incorrectAnswers,
      goBack,
      restartQuiz,
    } = this.props
    const { navigation } = this.props
    const { title, questions } = this.props

    return (
      <ContainerView>
        <ItemViewText>
          <TextTitleDeck style={{ marginBottom: 20 }}>Finished!</TextTitleDeck>
          {(incorrectAnswers > 0 && correctAnswers > 0) &&
            <View>
              <Result>✅ You're right in {correctAnswers} questions</Result>
              <Result>❌ And wrong in {incorrectAnswers} questions</Result>
            </View>
          }
          {(incorrectAnswers == 0) &&
            <Result>✅ You got all the {questions.length} questions 👏</Result>
          }
          {(incorrectAnswers > 0 && correctAnswers == 0) &&
            <Result>❌ You'are wrong in all the {questions.length} questions 😟</Result>
          }
          <Button
            onPress={() => restartQuiz()}
            style={{ height: 55, marginTop: 50 }}
          >
            Restart Quiz
          </Button>
          <Button
            onPress={() => navigation.goBack()}
            style={{ height: 55, marginTop: 10 }}
          >
            Back to Deck
          </Button>
        </ItemViewText>
      </ContainerView>
    )
  }
}

const ContainerView = styled.View`
  background-color: ${white};
  flex: 1;
  padding: 15px;
`
const ItemViewText = styled.View`
  height: 226px;
  padding-top: 132px;
`
const TextTitleDeck = styled.Text`
  color: ${black};
  font-size: 40px;
  text-align: center;
`
const Result = styled.Text`
  color: ${black};
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`

export default connect()(QuizView)
