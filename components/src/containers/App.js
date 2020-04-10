import React, { Component } from '../../node_modules/react';
import classes from './App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';

class App extends Component {

  constructor(props) {
    super(props);
    console.log("App.js constructor");
    this.state = {
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
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App.js get derived state from props', props);
    return state;
  }

  componentDidMount() {
    console.log('App.js component did mount.');
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

    this.setState((prevState, props) => { 
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });

    console.log("Counter: ", this.state.changeCounter);
  };

  toggleCockpit = () => {
    const show = this.state.showCockpit;
    this.setState({
      showCockpit: !show
    });
  };

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render() {

    console.log('App.js render method');

    let persons = null;

    if (this.state.showPersons) {

      persons = (
        <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
        <div className={classes.App}>
          <button onClick={this.toggleCockpit}>Show Cockpit</button>
          <AuthContext.Provider 
            value={{
              authenticated: this.state.authenticated,
              login: this.loginHandler}}
          >
            { 
              this.state.showCockpit ? (
              <Cockpit
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                personsLength={this.state.persons.length}
                clicked={this.togglePersonsHandler}
                login={this.loginHandler}
              /> ) : null
            }
            {persons}
          </AuthContext.Provider>
        </div>
    );
  }
}

export default App;
