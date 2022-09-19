import React, { useContext } from 'react'
import { CounterData } from './Context';

function Counter1() {
    let consumedValues = useContext(CounterData)
  return (
    <div><h3>Counter 1 Component</h3> 

        initial Value : {consumedValues.initialValueFromProvider} <br/>
        <button onClick={consumedValues.handleIncrementFromProvider}>Increment</button>&nbsp;
        <button onClick={consumedValues.handleDecrementFromProvider}>Decrement</button>&nbsp;
        <button onClick={consumedValues.handleResetFromProvider}>Reset</button>&nbsp;


{/* <Counter2></Counter2> */}
    </div>
  )
}

export default Counter1;