import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElement.focus();
        console.log(this.context.authenticated);
    }

    render() {
        return (
            <React.Fragment>
                {this.context.authenticated ? <p>Logged In!</p> : <p>Please Log In!</p>}
                <p onClick={this.props.click}>Hi my name is {this.props.name}, and I am {this.props.age} year(s) old!</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                    ref={(inputEl) => {this.inputElement = inputEl}}
                />
            </React.Fragment>
        );  
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);