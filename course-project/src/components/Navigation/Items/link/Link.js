import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './Link.module.css';

const link = (props) => (
    <li className={css.Link}>
        <NavLink 
            to={props.link} 
            activeClassName={css.active}
            exact
           >{props.children}
        </NavLink>
    </li>
);

export default link;