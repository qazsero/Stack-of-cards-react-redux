import {
  LOAD_CARDS,
  DRAW_CARD_FROM_DECK,
  SHUFFLE_DECK, 
  SORT_HAND, 
  } from './types'

import {cardGenerator, cardsGenerator} from '../utils/cards_generator'


export const loadCards = () => {
  
  //Deck Object
  const deck = cardsGenerator()

  return {
      type: LOAD_CARDS,
      payload: {deck}
  }
}

export const drawCardFromDeck = () => {
  return {
      type: DRAW_CARD_FROM_DECK
  }
}

export const shuffleDeck = () => {
  return {
      type: SHUFFLE_DECK
  }
}

export const sortHand = () => {
  return {
      type: SORT_HAND
  }
}
