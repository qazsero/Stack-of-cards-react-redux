import React, { Component } from 'react'

class Card extends Component {

  render() {

    return (
        <img className="card-img" alt={`${this.props.card.val}_of_${this.props.card.suit}`} src={`/svg-cards/${this.props.card.val}_of_${this.props.card.suit}.svg`} />
    );
  }
}


export default Card
