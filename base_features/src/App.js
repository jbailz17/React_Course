import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Max',
        age: 28
      },
      {
        name: "Bob",
        age: 100
      },
      {
        name: "Sam",
        age: 20
      }
    ]
  }

  changeNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 28
        },
        {
          name: "Bob",
          age: 100
        },
        {
          name: "Sam",
          age: 29
        }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: event.target.value,
          age: 28
        },
        {
          name: "Bob",
          age: 100
        },
        {
          name: "Sam",
          age: 29
        }
      ]
    });
  };

  render() {

    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button 
          style={buttonStyle}
          onClick={() => {this.changeNameHandler('Frank')}}
        >Change Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.changeNameHandler.bind(this, 'John')}
        >I am also a real person.</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
