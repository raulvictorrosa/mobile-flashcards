import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { fetchDeck } from '../actions';
import { getDeck } from '../api'
import styled from 'styled-components/native';
import { black, green, red, white } from '../utils/colors'
import { Button, ButtonOutline } from './Button'

class QuizView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.key
    }
  }

  correct = () => {
  }

  incorrect = () => {
  }

  render() {
    const { deck } = this.props
    return (
      <ContainerView>
        <ItemViewText>
          <TextTitleDeck>{deck.title}</TextTitleDeck>
          <TextSubTitleCard>{deck.questions.length} cards</TextSubTitleCard>
        </ItemViewText>
        <Button
          onPress={this.startQuiz}
          style={{ height: 55, marginTop: 10, backgroundColor: green }}
        >
          Correct
        </Button>
        <Button
          onPress={this.startQuiz}
          style={{ height: 55, marginTop: 10, backgroundColor: red }}
        >
          Incorrect
        </Button>
      </ContainerView>
    )
  }
}

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


const ContainerView = styled.View`
  background-color: ${white};
  flex: 1;
  padding: 15px;
  padding-top: 132;
`
const ItemViewText = styled.View`
  height: 226px;
`
const TextTitleDeck = styled.Text`
  color: ${black};
  text-align: center;
  font-size: 40px;
`
const TextSubTitleCard = styled.Text`
  color: #757575;
  font-size: 24px;
  padding-top: 8px;
  text-align: center;
`

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizView)
