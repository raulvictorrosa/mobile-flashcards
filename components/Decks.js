import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
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
  // renderEmptyDeck() {
  //   return (
  //     <View style={styles.item}>
  //       <Text style={styles.noDataText}>
  //         You didn't log any data on this day.
  //       </Text>
  //     </View>
  //   )
  // }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.item}>
          <Text style={styles.titleCard}>
            udacicards
          </Text>
          <Text style={styles.subTitleCard}>
            3 cards
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.titleCard}>
            new deck
          </Text>
          <Text style={styles.subTitleCard}>
            0 cards
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.titleCard}>
            New deck 2
          </Text>
          <Text style={styles.subTitleCard}>
            0 cards
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  titleCard: {
    color: black,
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 20,
  },
  subTitleCard: {
    color: '#757575',
    textAlign: 'center',
    fontSize: 18,
    // paddingTop: 20,
    paddingBottom: 20
  }
})

export default Decks
