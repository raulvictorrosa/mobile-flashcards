import React from 'react';
import { View, Platform, StatusBar, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import NewDeck from './components/NewDeck'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Decks from './components/Decks'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { black, yellow, white } from './utils/colors'
import { Constants } from 'expo'
// import EntryDetail from './components/EntryDetail'

const FlashCardsStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    },
  },
}, {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? white : black,
      inactiveTintColor: '#757575',
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? yellow : white,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  })

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  // EntryDetail: {
  //   screen: EntryDetail,
  //   navigationOptions: {
  //     headerTintColor: white,
  //     headerStyle: {
  //       backgroundColor: yellow,
  //     }
  //   }
  // }
})

export default class App extends React.Component {
  render() {
    return (
        <ContainerView>
          <FlashCardsStatusBar backgroundColor={black} barStyle="light-content" />
          <MainNavigator />
        </ContainerView>
    );
  }
}

const ContainerView = styled.View`
  flex: 1;
`
