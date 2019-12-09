import React, {Component} from 'react';


// styled component
import Styled from 'styled-components';



function generateRandomColor(){
  return '#' + Math.random().toString(16).substr(-6);
}



class MyCard extends Component {
  render() {
    const style = {
      padding: 20,
      textAlign: 'center',
      color: 'white',
      backgroundColor: this.props.color,
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}



class DynamicInlineStyle extends Component {

  constructor(props) {
    super(props);

    this.state = {
      color: 'skyblue',
    }
  }

  // use Arrow fx for binding this
  randomizeColor = () => {
    this.setState({color : generateRandomColor()});
  }

  render(){
    const {color} = this.state;
    const style = {
      padding: 20,
    };
    const spanStyle = {
      float: 'right',
    }

    return (
      <div style={style}>
        <MyCard color={color}>
          <input
            type='button'
            value='Random color'
            onClick={this.randomizeColor}
          />
          <span style={spanStyle}>{color}</span>
        </MyCard>
      </div>
    );
  }


}



const StyledCard = Styled.div`
  padding: 20px;
  color: white;
  text-align: center;
  background-color: ${props => props.color };
`;


const StyledButton = Styled.button`
color: skyblue;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid skyblue;
border-radius: 3px;
`;

const StyledSpan = Styled.span`
  float: right;
`;



class StyledComponent extends Component {

  constructor(props){
    super(props);

    this.state = {
      color: 'skyblue',
    }
  }

  // use Arrow fx for binding this
  randomizeColor = () => this.setState({color: generateRandomColor()});


  render (){

    return (
      <StyledCard color={this.state.color}>
        <StyledButton onClick={this.randomizeColor}>random color</StyledButton>
        <StyledSpan>{this.state.color}</StyledSpan>
      </StyledCard>
    );
  }
}

export {StyledComponent};
export default DynamicInlineStyle;
