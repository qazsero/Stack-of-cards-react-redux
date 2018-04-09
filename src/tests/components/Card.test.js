import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../../components/Card';

Enzyme.configure({adapter: new Adapter()});

const props = { 
  card: { val: '3', suit: 'Hearts'} 
};

describe('Card', () => {
  const card = shallow(<Card {...props} />);

  it('renders the card', () => {
    expect(card.find('img').prop('src')).toEqual('/svg-cards/3_of_Hearts.svg');
  });
});