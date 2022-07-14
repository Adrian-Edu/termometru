import React, {useState} from 'react';
import './App.css';


function App() {

  const [count, setCount]= useState(0)

  const handleClickOne = () => {
    setCount(count + 1)
  }

  const handleClickTwo = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
       
        <h1>{count}</h1>

        <div className="buttonul">
        <button onClick={handleClickOne }>+</button>
        <button onClick={handleClickTwo}>-</button>
        </div>

      </header>
    </div>
  );
}

export default App;
