import React from 'react';

import css from './Toolbar.module.css';
import Logo from '../../../components/Logo/Logo';
import Items from '../Items/Items';
import DrawToggle from '../SideDraw/DrawToggle/DrawToggle';

const toolbar = (props) => {

    return (
        <header className={css.Toolbar}>
            <DrawToggle clicked={props.drawToggleClicked}/>
            <Logo/>
            <nav className={css.DesktopOnly}>
                <Items/>
            </nav>
        </header>
    );

};

export default toolbar;