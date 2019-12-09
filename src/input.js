import React, {Component} from 'react';

import Styled from 'styled-components';


const Input = Styled.input`
  color: steelblue;
  font-size: 1em;
  border: 2px solid steelblue;
  border-radius: 3px;
  margin: 5px;
  padding: 10px;
`;

class InputComponent extends Component {

  constructor (){
    super();
    this.state = {
      value: '',
    }
  }

  handleChange = (e) => {
    const {value} = e.target;
    const newValue = value.substring(0,1).toUpperCase() + value.substring(1);
    this.setState({value: newValue});
  }

  render(){

    const {value} = this.state;

    return (
      <Input
      value={value}
      onChange={this.handleChange}
      type="text"
      placeholder="saisissez ici"
      />
    );

  }

}


export default InputComponent;
