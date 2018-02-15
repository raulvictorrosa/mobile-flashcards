import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';
// import { connect } from 'react-redux'
// import { receiveEntries, addEntry } from '../actions'
// import { timeToString, getDailyReminderValue } from '../utils/helpers'
// import { fetchCalendarResults } from '../utils/api'
// import UdaciFitnessCalendar from 'udacifitness-calendar'
import { black, white } from '../utils/colors'
// import DateHeader from './DateHeader'
// import MetricCard from './MetricCard'
// import { AppLoading } from 'expo'

class Decks extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ItemView>
          <TextTitleCard>
            udacicards
          </TextTitleCard>
          <TextSubTitleCard>
            3 cards
          </TextSubTitleCard>
        </ItemView>
        <ItemView>
          <TextTitleCard>
            new deck
          </TextTitleCard>
          <TextSubTitleCard>
            0 cards
          </TextSubTitleCard>
        </ItemView>
        <ItemView>
          <TextTitleCard>
            New deck 2
          </TextTitleCard>
          <TextSubTitleCard>
            0 cards
          </TextSubTitleCard>
        </ItemView>
      </View>
    )
  }
}

const ItemView = styled.TouchableOpacity`
  background-color: ${white};
  border-radius: ${Platform.OS === 'ios' ? 16 : 2};
  padding: 20px;
  margin-left: 10;
  margin-right: 10;
  margin-top: 17;
  justify-content: center;
  shadow-radius: 3px;
  shadow-opacity: 0.8;
  shadow-color: rgba(0, 0, 0, 0.24);
  shadow-offset: 0px 3px;
`
const TextTitleCard = styled.Text`
  color: ${black};
  text-align: center;
  font-size: 24px;
  padding-top: 20;
`
const TextSubTitleCard = styled.Text`
  color: #757575;
  text-align: center;
  font-size: 18px;
  padding-top: 20;
`

export default Decks
