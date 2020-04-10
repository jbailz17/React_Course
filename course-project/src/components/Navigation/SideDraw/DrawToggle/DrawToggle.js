import React from 'react';

import css from './DrawToggle.module.css';

const drawToggle = (props) => {

    return (
        <div className={css.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default drawToggle;