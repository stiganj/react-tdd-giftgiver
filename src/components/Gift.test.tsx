import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
    const mockRemove = jest.fn();
    const id=1;
    const props = {gift: { id }, removeGift:mockRemove};
    const gift = shallow(<Gift {...props}/>);

    it('renders correctly', ()=> {
        expect(gift).toMatchSnapshot();
    });
    
    it('initializes person and present in state', ()=> {
        expect(gift.state()).toEqual({ person: '', present: ''});
    });

    describe('When typing in the person input', () => {
        let person = 'Uncle';
        beforeEach(() => {
          gift.find('.input-person').simulate('change', {target: {value:person}});
        });
    
        afterEach(() => {
          
        });
    
        it('updates person in `state` ', ()=> {      
          expect(gift.state().person).toEqual(person);
        });
    });

    describe('When typing in the present input', () => {
      let present = 'Cake';
      beforeEach(() => {
        gift.find('.input-present').simulate('change', {target: {value:present}});
      });
  
      afterEach(() => {
        
      });
  
      it('updates present in `state` ', ()=> {      
        expect(gift.state().present).toEqual(present);
      });
  });

  describe('when clicking the`Remove Gift` button', () => {
    beforeEach(() => {
      gift.find('.btn-remove').simulate('click');
    });

    it('calls theremoveGift callback` ', ()=> {
        expect(mockRemove).toHaveBeenCalledWith(1);
    });
  });
    
});