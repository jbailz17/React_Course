import React from 'react';

import css from './Items.module.css';
import Link from './link/Link';

const items = (props) => {

    return (
        <ul className={css.Items}>
            <Link link="/">Burger Builder</Link>
            <Link link="/orders">Orders</Link>
        </ul>
    );
}

export default items;