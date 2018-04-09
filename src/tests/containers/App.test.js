import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from '../../containers/App'

Enzyme.configure({adapter: new Adapter()});

const props = { cards: {hand: [], deck:[]}}

describe('App', () =>{
  const app = shallow(<App {...props} />)

  it('renders the Hand', () =>{    
    //console.log(app.debug())
    expect(app.find('Hand').exists()).toBe(true)
  })

  it('renders the Deck', () =>{    
    expect(app.find('Deck').exists()).toBe(true)
  })
})



