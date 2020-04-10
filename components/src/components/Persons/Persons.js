import React, { PureComponent } from 'react';

import Person from './Person/Person';


class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('persons.js get derived state from props.');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('persons.js should component update.');

    //     if (nextProps.persons === this.props.persons) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('persons.js get snapshot before update.');
        return null;
    }

    componentDidUpdate() {
        console.log('persons.js component did update.');
    }

    componentWillUnmount() {
        console.log('Persons.js component will unmount!');
    }

    render() {
        return ( 
            this.props.persons.map((person, index) => {
            return ( <Person
                name={person.name}
                age={person.age}
                changed={(event) => {this.props.changed(event, person.id)}}
                click={this.props.click.bind(this, index)}
                key={person.id}
                />
            );
            })
        );
    }
}

export default Persons;