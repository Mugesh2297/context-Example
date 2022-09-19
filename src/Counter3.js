import React, { useContext } from 'react'
import { CounterData } from './Context'

function Counter3() {
    let values =  useContext(CounterData)
  return (
    <div>
        <h3>Counter 3 Component</h3>
        Initial Value: {values.initialValueFromProvider}<br></br>
        <button onClick={values.handleIncrementFromProvider}>Increment</button>&nbsp;
        <button onClick={values.handleDecrementFromProvider}>Decrement</button>&nbsp;
        <button onClick={values.handleResetFromProvider}>Reset</button>&nbsp;
    
    
    
    </div>
  )
}

export default Counter3