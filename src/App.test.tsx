import React from 'react';
//import { render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  const app = shallow(<App/>);

  it('renders correctly', ()=> {
    expect(app).toMatchSnapshot();
  });

  it('initializes the state with an empty list of gifts', ()=> {
    expect(app.state().gifts).toEqual([]);
  });

  describe('When clicking the `add-gift` button', () => {
    const id = 1;
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      app.setState({ gifts:[] });
    });

    it('adds a new gift to state ', ()=> {      
      expect(app.state().gifts[0].id).toEqual(1);
    });

    it('show list of elements in gift array ', ()=> {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('creates Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    })

    describe('and the user wants to remove added gift', () =>{
      beforeEach(() => {
        app.instance().removeGift(id);
      });

      it('removes the gift from`state`', () => {

      });
    });
  });
});

/*test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/
