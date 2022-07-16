import React, {useState} from 'react';
import './App.css';


function App() {

  const [valoareTemperatura, setValoareTemperatura]= useState(10)


  const increse = () => {
   setValoareTemperatura(valoareTemperatura + 1)
  }

  const descrise = () => {
    setValoareTemperatura(valoareTemperatura - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>

        <div className={'display-temperature ${blue}' }>
        <h1>{valoareTemperatura}</h1>
        </div>

        <div className="buttonul">
        <button onClick={increse }>+</button>
        <button onClick={descrise}>-</button>
        </div>

        </div>  
      </header>
    </div>
  );
}

export default App;
