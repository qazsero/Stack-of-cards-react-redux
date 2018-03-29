import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group';

import Card from './Card'

class Hand extends Component {

  cardContainer = () => {
    return this.props.hand.map((c, i) => (
      <Card key={i} card={c} />
    ))
  }

  render() {

    return (
      <div >
        <h2>HAND</h2>
        <div className="button-bar">
          <button onClick={this.props.sortHand}>Sort Hand</button>
        </div>
        <div className="card-container">
          <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
            {this.cardContainer()}
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}


export default Hand
