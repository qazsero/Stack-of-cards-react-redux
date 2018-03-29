import _ from 'lodash'

import {
  LOAD_CARDS,
  DRAW_CARD_FROM_DECK,
  SHUFFLE_DECK, 
  SORT_HAND} from '../actions/types'

const initialState ={
  hand: [],
  deck: []
}

export default function (state=initialState, action) {
  switch(action.type) {
    case LOAD_CARDS:
      return { ...initialState, deck: action.payload.deck}
    case DRAW_CARD_FROM_DECK:
      return {hand: [...state.hand, state.deck[0]], deck: state.deck.filter((c,i) => (i !== 0))}
    case SHUFFLE_DECK:
      return { hand: [...state.hand], deck: _.shuffle(state.deck)}
    case SORT_HAND:
      return { deck: [...state.deck], hand: _.orderBy(state.hand, ['suitOrder', 'valOrder'], ['asc', 'asc'])}
    default:
      return state
  }
}
