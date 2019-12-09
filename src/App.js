import React, { Component } from 'react';


import Counter from './counter';
import Card from './card';
import DynamicInlineStyle, {StyledComponent} from './styling';
import EventComponent from './event';
import InputComponent from './input';
import ConditionnalComponent from './conditionnal';
import MeasuredNode from './ref';
import TodoList from './todoListState/TodoList';

class App extends Component {
  render() {

    const styleSectionExercice = {
      backgroundColor: '#ecf7f9',
      borderBottom: 'solid grey 1px',
      marginBottom: '30px',
    };

    const styleBody = {
      width: '700px',
      padding: '50px',
      textAlign: 'center',
    }

    return (
      <div style={styleBody}>

        <h1>Some exercice example for React</h1>

        <div style={styleSectionExercice}>
          <h2>Counter using Component lifeCycle method componentDidMount and state</h2>
          <Counter color="black" fontSize="1.3em" />
        </div>

        <div style={styleSectionExercice}>
          <h2>Card component using style and children props</h2>
          <Card />
          <Card color="steelblue">My card 2</Card>
        </div>

        <div style={styleSectionExercice}>
          <h2>Dynamic styling components using inline styles</h2>
          <DynamicInlineStyle />
        </div>

        <div style={styleSectionExercice}>
          <h2>Dynamic styling components using CSS in JS with 'styled-components'</h2>
          <StyledComponent />
        </div>

        <div style={styleSectionExercice}>
          <h2>Handle event</h2>
          <EventComponent />
        </div>

        <div style={styleSectionExercice}>
          <h2>Input</h2>
          <InputComponent />
        </div>

        <div style={styleSectionExercice}>
          <h2>Conditionnal Rendering</h2>
          <ConditionnalComponent title="Title" />
          <ConditionnalComponent title="Title" subtitle="SubTitle" />
        </div>

        <div style={styleSectionExercice}>
          <h2>Measure a DOM node using prop : ref</h2>
          <MeasuredNode />
        </div>

        <div style={styleSectionExercice}>
          <h2>A TODO list using state for data management</h2>
          <TodoList />
        </div>


      </div>
    );
  }
}

export default App;
