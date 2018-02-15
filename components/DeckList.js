import React, { Component } from 'react'
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  FlatList
} from 'react-native'
import styled from 'styled-components/native';
import { connect } from 'react-redux'
import { fetchDecks } from '../actions'
import { getDecks } from '../api'
import { black, white } from '../utils/colors'
// import { AppLoading } from 'expo'

class Decks extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    getDecks().then((decks) => dispatch(fetchDecks(decks)))
      // .then(() => this.setState(() => ({ ready: true })))
  }

  // onPress = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }


  render() {
    const { decks } = this.props
    return (
      <ContainerView>
        {/* <TextTitleDeck>{this.state.count}</TextTitleDeck> */}
        <TextTitleDeck>{decks.length}</TextTitleDeck>
        <FlatList
          data={decks}
          renderItem={({ item }) =>
          decks.length === 0
            ? <ItemDeckView>
                <TextTitleDeck>No deck registred.</TextTitleDeck>
              </ItemDeckView>
            : <ItemDeckView key={item.title} onPress={this.onPress}>
                <TextTitleDeck>{item.title}</TextTitleDeck>
                <TextSubTitleCard>{item.questions.length} cards</TextSubTitleCard>
              </ItemDeckView>
          }
        />
      </ContainerView>
    )
  }
}

const ContainerView = styled.View`
  flex: 1;
  padding-bottom: 40;
`
const ItemDeckView = styled.TouchableOpacity`
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
const TextTitleDeck = styled.Text`
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

// const mapStateToProps = state => {
//   const DBdata = state.decks;

//   return { DBdata };
// }
function mapStateToProps(decks) {
  return {
    decks
  }
}

// export default connect(
//   mapStateToProps,
//   { fetchDecks }
// )(Decks)
export default connect(
  mapStateToProps,
)(Decks)
