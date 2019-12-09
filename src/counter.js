import React, {Component} from 'react';

class Counter extends Component {

  constructor (props){
    super(props)
    this.state = {
      count: 0,
    };

  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({count : this.state.count + 1});
    }, 1000);
  }

  render() {
    const {color, fontSize} = this.props;

    const style = {
      color,
      fontSize,
    };

    return (
      <div style={style}>
        {this.state.count}
      </div>
    )


  }


}

export default Counter;
