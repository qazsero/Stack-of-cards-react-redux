import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Deck from '../../components/Deck';
import {cardsGenerator} from '../../utils/cards_generator'

Enzyme.configure({adapter: new Adapter()});

const props = { 
  deck:  cardsGenerator(),
  drawCardFromDeck: jest.fn(),
  shuffleDeck: jest.fn()
};

describe('Deck', () => {
  const deck = shallow(<Deck {...props} />);

  it('renders the title', () => {
    expect(deck.find('h2').at(0).text()).toEqual('DECK');
  });

  it('should draw a card when button is clicked', () => {
    expect(deck.find('.btn-draw-card').exists()).toEqual(true)

    deck.find('.btn-draw-card').simulate('click');
    expect(props.drawCardFromDeck).toHaveBeenCalled();
  });

  it('should shuffle the deck when button is clicked', () => {
    expect(deck.find('.btn-shuffle-deck').exists()).toEqual(true)

    deck.find('.btn-shuffle-deck').simulate('click');
    expect(props.shuffleDeck).toHaveBeenCalled();
  });

  it('renders the correct number of cards', () => {
    expect(deck.find('Card').length).toEqual(props.deck.length);
  });
});