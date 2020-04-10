import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map((res) => {
                        return (
                            <li key={res.id} onClick={() => {this.props.onDeleteResult(res.id)}}>{res.value}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrement: () => dispatch({type: actionTypes.DECREMENT}),
        onAdd: () => dispatch({type: actionTypes.ADD, value: 5}),
        onSubtract: () => dispatch({type: actionTypes.SUBTRACT, value: 5}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (resultId) => dispatch({type: actionTypes.DELETE_RESULT, id: resultId})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);