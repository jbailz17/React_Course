import React from 'react';

import css from './Logo.module.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => {
    return (
        <div className={css.Logo}>
            <img src={burgerLogo} alt="MyBurger"/>
        </div>
    );
}

export default logo;