import React from 'react';

import css from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {

    return (
        <div className={css.CheckoutSummary}>
            <h1>Your delicious burger!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked={props.onCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.onContinue}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;