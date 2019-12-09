import React, {Component} from 'react';

import List from './List';
import Input from './Input';

class TodoList extends Component {


  constructor(){
    super();
    this.state = {
      count: 0,
      lists: [{id: 0, name: 'Example task'}],
    }
  }

  // use Arrow fx for binding this
  addItem = (name) => {
    this.setState({lists: [...this.state.lists,{id : this.state.count, name}], count: this.state.count + 1});
  }


  // use Arrow fx for binding this
  removeItem = (id) => {
    const newList = this.state.lists.filter((item) => id !== item.id);
    this.setState({lists: newList});
  }

  render(){
    const {lists} = this.state;
    return (
      <div>
        <Input onEnterKeyPress={this.addItem}  />
        <ul>
        {lists.map(({id, name}) => (
          <List key={id} onListClick={this.removeItem} id={id} name={name} />
        ))}
        </ul>
      </div>
    );
  }


}

export default TodoList;
