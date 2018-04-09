import cardsReducer from '../../reducers/reducer_cards';
import * as types from '../../actions/types'

//Sample cards
const unsortedCards = [
    { suit: 'hearts', val: 'king', suitOrder: 2, valOrder: 11},
    { suit: 'hearts', val: 3, suitOrder: 2, valOrder: 1},
    { suit: 'clubs', val: 6, suitOrder: 0, valOrder: 4},
    { suit: 'diamonds', val: 'ace', suitOrder: 3, valOrder: 12},
    { suit: 'spades', val: 9, suitOrder: 1, valOrder: 7}
]

const firstUnsortedCard = [
    { suit: 'hearts', val: 'king', suitOrder: 2, valOrder: 11}
]

const unsortedCardsMinusFirst = [
    { suit: 'hearts', val: 3, suitOrder: 2, valOrder: 1},
    { suit: 'clubs', val: 6, suitOrder: 0, valOrder: 4},
    { suit: 'diamonds', val: 'ace', suitOrder: 3, valOrder: 12},
    { suit: 'spades', val: 9, suitOrder: 1, valOrder: 7}
]

const sortedCards = [
    { suit: 'clubs', val: 6, suitOrder: 0, valOrder: 4},
    { suit: 'spades', val: 9, suitOrder: 1, valOrder: 7},
    { suit: 'hearts', val: 3, suitOrder: 2, valOrder: 1},
    { suit: 'hearts', val: 'king', suitOrder: 2, valOrder: 11},
    { suit: 'diamonds', val: 'ace', suitOrder: 3, valOrder: 12},
]

describe('Cards reducer', () => {
  it('returns the initial state', () => {
    expect(cardsReducer(undefined, {})).toEqual({hand: [],deck: []});
  });

  it('loads cards', () => {
    expect(cardsReducer(undefined, { type: types.LOAD_CARDS, payload:{deck: unsortedCards} }))
      .toEqual({hand:[], deck: unsortedCards});
  });

  it('draws a card', () => {
      expect(cardsReducer({hand: [], deck: unsortedCards}, {type: types.DRAW_CARD_FROM_DECK}))
        .toEqual({hand: firstUnsortedCard, deck: unsortedCardsMinusFirst})
  })

  it('sorts the cards', () => {
    expect(cardsReducer({hand: unsortedCards, deck: []}, {type: types.SORT_HAND}))
      .toEqual({hand: sortedCards, deck: []})
  })

});