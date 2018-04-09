import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hand from '../../components/Hand';
import {cardsGenerator} from '../../utils/cards_generator'

Enzyme.configure({adapter: new Adapter()});


const props = { 
  hand: cardsGenerator(),
  sortHand: jest.fn()
};

describe('Hand', () => {
  const hand = shallow(<Hand {...props} />);

  it('renders the title', () => {
    expect(hand.find('h2').at(0).text()).toEqual('HAND');
  });

  it('should draw a card when button is clicked', () => {
    expect(hand.find('.btn-sort-hand').exists()).toEqual(true)

    hand.find('.btn-sort-hand').simulate('click');
    expect(props.sortHand).toHaveBeenCalled();
  });
  
  it('renders the correct number of cards', () => {
    expect(hand.find('Card').length).toEqual(props.hand.length);
  });
});