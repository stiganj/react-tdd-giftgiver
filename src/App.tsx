import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Gift, {GiftId} from './components/Gift';



interface State {
  //gifts: Gift[];
  gifts: GiftId[];
}

class App extends Component<{}, State>{

  state: State = {
    gifts: [] 
  } 

  addGift = ()=> {
    const {gifts}  = this.state;
    //const ids = this.state.gifts.map(gift => gift.id);   
    //this.max_id = ids.length > 0 ? Math.max(...ids): gifts.push( new Gift({id: this.max_id+1}));  //{ id: max_id+1});
    const ids = this.state.gifts.map(gift => gift.id);
    const max_id = ids.length > 0 ? Math.max(...ids): 0;
    gifts.push( { id: max_id+1}); 
    this.setState( { gifts });
    //this.forceUpdate();
  }

  removeGift = (id: number) => {
    const gifts = this.state.gifts.filter(gift => gift.id!==id);
    this.setState( {gifts} );
  }
  render() {
    return (
      <div className="App">
        <h2>Gift Giver</h2>
        <div className="gift-list">
        {
              this.state.gifts.map(gift => {
                return (
                <Gift 
                  key={gift.id}
                  gift={gift} 
                  removeGift={this.removeGift}
                />
                )
              })
        }
        </div>
        <Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
      </div>
    );
  }
}

export default App;
