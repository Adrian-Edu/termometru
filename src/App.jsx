import React, {useState} from 'react';
import './App.css';


function App() {

  const [click, setClick] = useState(0)
  const [change, setChange] = useState("")

  const creste = () => {
     const plus = click + 1 
    
     if (plus >= 15) {
      setChange("hot")
     }
     setClick(plus)
  }
 
  const descreste = () => {
    const minus = click - 1 
   
    if (minus < 15) {
      setChange("freeze")
    }
    setClick(minus)
 }

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>

        <div className={`display-temperature ${change}`}>
        <h1>{click}</h1>
        </div>

        <div className="buttonul">
        <button onClick={descreste}>-</button>
        <button onClick={creste}>+</button>
        </div>

        </div>  
      </header>
    </div>
  );
}

export default App;
