import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: 'Max',
        age: 28
      },
      {
        id: 2,
        name: "Bob",
        age: 100
      },
      {
        id: 3,
        name: "Sam",
        age: 20
      }
    ],
    showPersons: false
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    if (this.state.showPersons) {
      this.setState({showPersons: false});
    } else {
      this.setState({showPersons: true});
    }
  }
  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  render() {

    let classes = [];

    let persons = null;

    if (this.state.showPersons) {

      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return ( <Person
                name={person.name}
                age={person.age}
                changed={(event) => {this.nameChangedHandler(event, person.id)}}
                click={this.deletePersonHandler.bind(this, index)}
                key={person.id}/>
              );
            })
          }
        </div>
      );
    }

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hello World!</h1>
          <p className={classes.join(' ')}>Dynamic Styling!!!</p>
          <button className='button' onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
