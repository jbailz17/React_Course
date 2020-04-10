import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css';

import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('Cockpit.js use effect.');
        
        setTimeout(() => {
            toggleBtnRef.current.click();
        }, 1000);

        return (() => {
            console.log('cockpit.js return statement of use effect.')
        });

    }, []);

    const assignedClasses = [];

    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
  
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Dynamic Styling!!!</p>
            <button 
                ref={toggleBtnRef}
                className={btnClass} 
                onClick={props.clicked}>
                Toggle Persons
            </button>
            <p/>
            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(Cockpit);