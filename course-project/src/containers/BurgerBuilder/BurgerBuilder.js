import React, { Component } from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Model from '../../components/UI/Model/Model';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            purchasing: false,
            loading: false
        }
    }

    componentDidMount() {
        axios.get('ingredients.json').then((res) => {
            this.setState({ingredients: res.data});
        }).catch(error => {});
    }

    updatePurchaseState = (ingredients) => {

        const sum = Object.keys(ingredients).map((key) => {
            return ingredients[key];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);

        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    cancelPurchaseHandler = () => {
        this.setState({purchasing: false});
    }

    continuePurchaseHandler = () => {
        this.props.history.push('/checkout');
    }

    render () {
        const disabledInfo = {
            ...this.props.ings
        };
        
        let orderSummary = null;

        let burger = <Spinner/>

        if (this.props.ings) {
            burger = (
                <React.Fragment>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemove}
                        disabled={disabledInfo}
                        price={this.props.price}
                        purchaseable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}
                    />
                </React.Fragment>   
            );

            orderSummary = (
                <OrderSummary 
                    ingredients={this.props.ings}
                    purchaseCancelled={this.cancelPurchaseHandler}
                    purchaseContinued={this.continuePurchaseHandler}
                    price={this.props.price}
                />
            );
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        if (this.state.loading) {
            orderSummary = <Spinner/>;
        }

        return (
            <React.Fragment>
                <Model show={this.state.purchasing} modelClosed={this.cancelPurchaseHandler}>
                    {orderSummary}
                </Model>
                {burger}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (name) => dispatch(
            {type: actionTypes.ADD_INGREDIENT, ingredientName: name}
        ),
        onIngredientRemove: (name) => dispatch(
            {type: actionTypes.REMOVE_INGREDIENT, ingredientName: name}
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));