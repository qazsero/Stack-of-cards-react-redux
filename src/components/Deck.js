import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group';

import Card from './Card'

class Deck extends Component {

  componentDidMount(){
    if(this.props.deck.length === 0){
      this.props.loadCards()
    }
  }

  cardContainer = () => {
    return this.props.deck.map((c, i) => (
      <Card key={i} card={c} />
    ))
  }


  render() {
    return (
      <div>
        <h2>DECK</h2>
        <div className="button-bar">
          <button className="btn" onClick={this.props.drawCardFromDeck}>Draw Card</button>
          <button className="btn" onClick={this.props.shuffleDeck}>Shuffle Deck</button>
        </div>
        <div className="card-container">
          <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
            {this.cardContainer()}
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Deck
