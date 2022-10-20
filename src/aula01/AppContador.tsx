import React, { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [numero, setNumero] = useState(0);
  
  useEffect(()=>{
    if(numero === 10) alert("tenis pé");
  },[numero])

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ gap:'20px', display:'flex', alignSelf:'center' }} className="teste">
          <button onClick={() => setNumero(numero - 1)}>-</button>
          <label>{numero}</label>
          <button onClick={() => setNumero(numero + 1)}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
