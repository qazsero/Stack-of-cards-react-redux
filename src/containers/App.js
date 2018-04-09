import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

import Deck from '../components/Deck'
import Hand from '../components/Hand'

import '../App.css'
import '../Transitions.css'


export class App extends Component {


  render() {
    return (
      <div className="app">
        <Hand 
          hand={this.props.cards.hand}
          sortHand={this.props.sortHand} />
        <Deck 
          deck={this.props.cards.deck}
          loadCards={this.props.loadCards}
          drawCardFromDeck={this.props.drawCardFromDeck}
          shuffleDeck={this.props.shuffleDeck} />
      </div>
    );
  }
}


function mapStateToProps({cards}){
  return {
    cards
  }
}

export default connect(mapStateToProps, actions)(App)