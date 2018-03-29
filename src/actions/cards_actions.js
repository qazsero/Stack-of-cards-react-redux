import {
  LOAD_CARDS,
  DRAW_CARD_FROM_DECK,
  SHUFFLE_DECK, 
  SORT_HAND, 
  } from './types'


export const loadCards = () => {
  //We have to return an array of objects containing every possible combination
  const suits = ['clubs','spades','hearts','diamonds']
  const cvalues = [2,3,4,5,6,7,8,9,10,'jack','queen','king', 'ace']
  let deck = []
  let suitOrder = 0

  for(let suit of suits){
    let valOrder = 0
    for(let val of cvalues){
        deck.push({suit, val, suitOrder, valOrder, position:'deck'})
        valOrder++
    }
    suitOrder++
  }

  return (dispatch) => {
    dispatch({
      type: LOAD_CARDS,
      payload: {deck}
    });
  }
}

export const drawCardFromDeck = () => {
  return (dispatch) => {
    dispatch({
      type: DRAW_CARD_FROM_DECK
    });
  }
}

export const shuffleDeck = () => {
  return (dispatch) => {
    dispatch({
      type: SHUFFLE_DECK
    });
  }
}

export const sortHand = () => {
  return (dispatch) => {
    dispatch({
      type: SORT_HAND
    });
  }
}
