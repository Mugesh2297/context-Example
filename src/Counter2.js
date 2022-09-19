import React, { Component } from 'react';
import{CounterData} from './Context';


class Counter2 extends Component {
    constructor() {
        super();
    }
    render() {
       return(
        <CounterData.Consumer>
            {(providedValues)=>{
                return(
                    <>
                    <h3>Counter 2 Component</h3>
                    Initial Value: {providedValues.initialValueFromProvider}<br/>
                    <button onClick={providedValues.handleIncrementFromProvider}>Increment </button>&nbsp;
                    <button onClick={providedValues.handleDecrementFromProvider}>Decrement </button>&nbsp;
                    <button onClick={providedValues.handleResetFromProvider}>Reset </button>
                    </>
                )
            }}
        </CounterData.Consumer>
       );
        }
    }
export default Counter2;
 