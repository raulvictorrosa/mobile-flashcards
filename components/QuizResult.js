import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components/native';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { black, white } from '../utils/colors'
import { Button } from './Button'

class QuizResult extends Component {
  componentDidMount() {
    //It clears today notification and sets tomorrow notification
    clearLocalNotification()
      .then(setLocalNotification)
  }

  render() {
    const {
      incorrectAnswers,
      correctAnswers,
      questionsLength
    } = this.props

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
            <Result>✅ You got all the {questionsLength} questions 👏</Result>
          }
          {(incorrectAnswers > 0 && correctAnswers == 0) &&
            <Result>❌ You'are wrong in all the {questionsLength} questions 😟</Result>
          }
          <Button
            onPress={() => this.setState({ ...this.initialState })}
            style={{ height: 55, marginTop: 50 }}
          >
            Restart Quiz
          </Button>
          <Button
            onPress={() => navigate('DeckView', { title })}
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

function mapStateToProps(state, { navigation }) {
  const { title } = navigation.state.params
  return {
    deck: state[title]
  }
}

function mapDispatchToProps(dispatch, { navigation }) {
  return {
    navigate: (navigateTo, params) => navigation.navigate(navigateTo, params)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizResult)
