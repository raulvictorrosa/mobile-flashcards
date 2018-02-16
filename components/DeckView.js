import React, { Component } from 'react'
import {
  Text
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

class DeckView extends Component {
  render() {
    return (
      <Text>Deck View</Text>
    )
  }
}

export default connect()(DeckView)
