import React, { Component } from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';

interface State {
    person: String
    present: String
}
export interface GiftId {
    id: number;
  }

class Gift extends Component<{gift:GiftId, removeGift: any}, State>{
    constructor(props:any) {
        super(props);

        this.id = props.gift.id;
        this.gift = {id:props.gift.id};
        this.removeGift = props.removeGift;
    }
    id: number;
    gift: GiftId;
    removeGift = (id: number) =>{};

    state: State = { person: '', present: '' }

    render() {
        return (
            <div className="gift">
                <Form>
                    <FormGroup>
                       <FormLabel>Person</FormLabel>
                       <FormControl 
                            className='input-person'
                            onChange={(
                                ev: React.ChangeEvent<HTMLInputElement>): void => this.setState({person:ev.target.value})}
                        />
                        <FormLabel>Present</FormLabel>
                        <FormControl 
                            className='input-present'
                            onChange={(
                                ev: React.ChangeEvent<HTMLInputElement>): void => this.setState({present:ev.target.value})}
                        /> 
                    </FormGroup>                
                </Form> 
                <Button 
                    className='btn-remove'
                    onClick = {()=> this.removeGift(this.id)}
                >
                    Remove Gift
                </Button>       
            </div>
        );
    }

}
export default Gift;