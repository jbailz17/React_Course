import React from 'react';

import css from './SideDraw.module.css';
import Logo from '../../Logo/Logo';
import Items from '../Items/Items';
import BackDrop from '../../UI/Backdrop/Backdrop';

const sideDraw = (props) => {

    let attachedCss = [css.SideDraw, css.Close];

    if (props.open) {
        attachedCss = [css.SideDraw, css.Open];
    }

    return(
        <React.Fragment>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedCss.join(' ')}>
                <div className={css.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <Items/>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default sideDraw;