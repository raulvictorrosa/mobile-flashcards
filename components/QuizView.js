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
import { black, green, red, white } from '../utils/colors'
import { Button } from './Button'

class QuizView extends Component {
  initialState = {
    showAnswer: false,
    currentQuestion: 0,
    correctAnswers: 0,
    incorrectAnswers: 0
  }

  state = {
    ...this.initialState
  }

  nextQuestion = () => this.setState(() => ({ currentQuestion: ++this.state.currentQuestion }))

  correct = () => {
    this.setState(() => ({ correctAnswers: ++this.state.correctAnswers }))
    this.nextQuestion()
  }

  incorrect = () => {
    this.setState(() => ({ incorrectAnswers: ++this.state.incorrectAnswers }))
    this.nextQuestion()
  }

  render() {
    const { showAnswer, currentQuestion, correctAnswers, incorrectAnswers } = this.state
    const { navigate } = this.props
    const { title, questions } = this.props.deck

    if (currentQuestion < questions.length) {
      return (
        <ContainerView>
          <QtdQuestions>{currentQuestion+1}/{questions.length}</QtdQuestions>
          <ItemViewText>
            <TextTitleDeck>
              {showAnswer
                ? questions[currentQuestion].answer
                : questions[currentQuestion].question
              }
            </TextTitleDeck>
            <Btn onPress={() => this.setState(() => ({ showAnswer: !this.state.showAnswer }))} >
              {showAnswer == true
                ? <BtnText>Question</BtnText>
                : <BtnText>Answer</BtnText>
              }
            </Btn>
          </ItemViewText>

          <Button
            onPress={this.correct}
            style={{ height: 55, marginTop: 10, backgroundColor: green }}
          >
            Correct
          </Button>
          <Button
            onPress={this.incorrect}
            style={{ height: 55, marginTop: 10, backgroundColor: red }}
          >
            Incorrect
          </Button>
        </ContainerView>
      )
    }

    return (
      <QuizResult />
    )
  }
}

const ContainerView = styled.View`
  background-color: ${white};
  flex: 1;
  padding: 15px;
`
const QtdQuestions = styled.Text`
  color: ${black};
  font-size: 20px;
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
const Btn = styled.TouchableOpacity`
  padding-top: 8px;
`
const BtnText = styled.Text`
  color: ${red};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
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
)(QuizView)
