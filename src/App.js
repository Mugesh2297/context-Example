
import './App.css';
import React, { useState } from 'react';
import Counter1 from './Counter1';
import { CounterData} from './Context.js'
import Counter2 from './Counter2';
import Counter3 from './Counter3';


function App() {
  const [initialValue, setInitialValue] = useState(0);
  const handleIncrement = () =>{
    setInitialValue (initialValue+1);
  }
  const handleDecrement = () =>{
    setInitialValue (initialValue-1);
  }
  const handleReset = () =>{
    setInitialValue (0);
  }
  return (
    <div className="App">
      <br/><br/>
      <div>Initial Value: {initialValue}
      <br/>
      <br/>
      <button onClick={handleIncrement}>Increment</button> &nbsp;
      <button onClick={handleDecrement}>Decrement</button> &nbsp;
      <button onClick={handleReset}>Reset</button>&nbsp;
      </div>
    <br/><hr/>
    <CounterData.Provider value={{
      initialValueFromProvider: initialValue,
      handleIncrementFromProvider: handleIncrement,
      handleDecrementFromProvider: handleDecrement,
      handleResetFromProvider: handleReset,
    }}>
    <Counter1></Counter1>
    <hr/>
    <Counter2></Counter2>
    <hr/>
  
    <Counter3></Counter3>
    <hr/>
    </CounterData.Provider>
    </div>
  );
}

export default App;
