import React from 'react';

import css from './Model.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const model = (props) => (
    <React.Fragment>
        <Backdrop show={props.show} clicked={props.modelClosed}/>
        <div 
            className={css.Model}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </React.Fragment>
);

export default model;