import * as actions from '../../actions/cards_actions'
import { cardsGenerator } from '../../utils/cards_generator'
import {
    LOAD_CARDS,
    DRAW_CARD_FROM_DECK,
    SHUFFLE_DECK, 
    SORT_HAND, 
} from '../../actions/types'

describe('actions', () => {
    it('creates an action to load cards', () => {
        const deck = cardsGenerator()
        const expectedAction = {type: LOAD_CARDS, payload: {deck}}
        expect(actions.loadCards()).toEqual(expectedAction)
    })

    it('creates an action to draw a card from the deck', () => {
        const expectedAction = {type: DRAW_CARD_FROM_DECK}
        expect(actions.drawCardFromDeck()).toEqual(expectedAction)
    })

    it('creats en action to shuffle the deck', ()=>{
        const expectedAction = { type: SHUFFLE_DECK}
        expect(actions.shuffleDeck()).toEqual(expectedAction)
    })

    it('creats en action to sort the hand', ()=>{
        const expectedAction = { type: SORT_HAND}
        expect(actions.sortHand()).toEqual(expectedAction)
    })
})