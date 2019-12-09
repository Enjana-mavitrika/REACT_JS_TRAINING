import React, {Component} from 'react';
import Styled from 'styled-components';

const DivZone = Styled.div`
  padding: 15px;
  background: steelblue;
`;


class EventComponent extends Component {

  constructor(){
    super();
    this.state = {
      isIn: false,
    };
  }

  handleMouseEnter = () => this.setState({isIn: true});
  handleMouseLeave = () => this.setState({isIn: false});

  render(){

    return (
      <DivZone onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {this.state.isIn ? 'vous êtes bien dedans !' : 'ramener votre souris sur cette zone'}
      </DivZone>
    );

  }

}

export default EventComponent;
