import React from 'react';
import {
  Text,
  View,
  Platform,
  StatusBar,
  StyleSheet
} from 'react-native';
import styled from 'styled-components/native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import Thunk from 'redux-thunk';
import Reducers from './reducers'
import NewDeck from './components/NewDeck'
import DeckList from './components/DeckList'
import DeckView from './components/DeckView'
import AddCard from './components/AddCard'
import QuizView from './components/QuizView'
import { black, yellow, white } from './utils/colors'
import { setLocalNotification } from './utils/helpers'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
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
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
        marginTop: -25
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTitle: 'Add Card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
        marginTop: -25
      }
    }
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      headerTitle: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
        marginTop: -25
      }
    }
  }
})

const ContainerView = styled.View`
  flex: 1;
`
const StatusBarView = styled.View`
  background-color: ${black};
  height: ${Constants.statusBarHeight};
`

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  Reducers,
  composeEnhancers(
    applyMiddleware(Thunk)
  )
)

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <ContainerView>
          <StatusBarView>
            <StatusBar translucent backgroundColor={black} barStyle="light-content" />
          </StatusBarView>

          <MainNavigator />
        </ContainerView>
      </Provider>
    );
  }
}
