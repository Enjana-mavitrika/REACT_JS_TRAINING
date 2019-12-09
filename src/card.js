import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props){
    super(props);
  }

  static defaultProps = {
    children: 'Custom card',
    color: 'skyblue',
  }

  static propTypes = {
    color: PropTypes.string,
    children: PropTypes.string,
  }

  render(){

    const {children, color} = this.props;

    const style = {
      backgroundColor: color,
      margin: '20px',
      padding: '20px',
      color: 'white',
    }

    return (
      <div style={style}>
        {children}
      </div>
    );
  }

}


export default Card;
