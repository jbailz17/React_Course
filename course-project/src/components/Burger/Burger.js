import React from 'react';
import { withRouter } from 'react-router-dom';

import css from './Burger.module.css';
import Ingredient from './Ingredient/Ingredient';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(key => {
        return [...Array(props.ingredients[key])].map((_, i) => {
            return <Ingredient key={key + i} type={key}/>;
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    console.log(transformedIngredients);

    return (
        <div className={css.Burger}>
            <Ingredient type="bread-top"/>
            {transformedIngredients}
            <Ingredient type="bread-bottom"/>
        </div>
    );
};

export default withRouter(burger);