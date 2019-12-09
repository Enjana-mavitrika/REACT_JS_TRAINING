import React, {Component} from 'react';

import './input.css';

class Input extends Component  {

  DEFAULT = {value: ''};

  constructor(props){
    super(props);
    this.state = {
      value: '',
    }
  }

  handleChange = (e) => this.setState({value: e.target.value.substring(0,1).toUpperCase() + e.target.value.substring(1)});

  handleKeyPress = (e) => {
    if (e.key === 'Enter'){
      this.props.onEnterKeyPress(this.state.value);
      this.setState(this.DEFAULT);
    }
  }
  render(){

    return (
      <input className='input' value={this.state.value} placeholder="ajouter une tâche ici" onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
    );
  }

}

export default Input;
