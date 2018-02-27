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
import { Button, ButtonOutline } from './Button'

class QuizView extends Component {
  state = {
    showAnswer: false,
    currentQuestion: 0,
    correctAnswers: 0,
    incorrectAnswers: 0
  }
  nextQuestion = () => {
    let current = this.state.currentQuestion
    current++
    this.setState(() => ({ currentQuestion: current }))
  }

  correct = () => {
    this.nextQuestion()

    let correct = this.state.correctAnswers
    correct++
    this.setState(() => ({ correctAnswers: correct }))
  }

  incorrect = () => {
    this.nextQuestion()

    let incorrect = this.state.incorrectAnswers
    incorrect++
    this.setState(() => ({ incorrectAnswers: incorrect }))
  }

  toggleQuestion = () => {
    const { showAnswer } = this.state
    if (showAnswer) {
      this.setState(() => ({ showAnswer: false }))
    } else {
      this.setState(() => ({ showAnswer: true }))
    }
  }

  render() {
    const { showAnswer, currentQuestion, correctAnswers } = this.state
    const { questions } = this.props.deck

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
            <Btn onPress={this.toggleQuestion} >
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
      <ContainerView>
        <ItemViewText>
          <TextTitleDeck>Finished!</TextTitleDeck>
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
const QtdQuestions = styled.Text`
  color: ${black};
  font-size: 20px;
`
const ItemViewText = styled.View`
  height: 226px;
  padding-top: 132;
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
  const { key } = navigation.state.params
  return {
    deck: state[key]
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
