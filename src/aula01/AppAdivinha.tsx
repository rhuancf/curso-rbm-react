import React, { useState,useEffect,ChangeEvent, EventHandler } from 'react';
import Nav from '../components/Nav';

function App() {
  const [numero, setNumero] = useState(0);
  const [tentativas, setTentativas] = useState(0);
  const [numeroSecreto, setNumeroSecreto] = useState(Math.ceil(Math.random() * 19));

  function checkNumber() {
    console.log(numero)
    console.log(numeroSecreto)
    const diferenca = Math.abs(numero - numeroSecreto);
    let acertou = false;

    setTentativas(tentativas + 1);

    (diferenca > 5) ? alert('tá Frio') : (numero !== numeroSecreto) ? alert('tá Quente') : acertou = true;

    if(acertou) {
      alert('Boa, burro! Acertou em ' + (tentativas + 1) + ' tentativas.');
      setTentativas(0);
      setNumeroSecreto(Math.ceil(Math.random() * 19));
    }
  
  }

  function testeKeydown(e:React.KeyboardEvent) {
    if(e.keyCode===13) checkNumber()
  }

  return (
    <div className="App">
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"20px"}}>
      <Nav/>
        <div style={{display:"flex",justifyContent:"center", width:"auto", margin:"20px"}}>
          <input onKeyDown={(e)=> testeKeydown(e)} onChange={(e)=> setNumero(parseInt(e.target.value))} type="number"></input>
          <button onClick={() => checkNumber()}>Chutar</button>
        </div>
          <label>Tentativas: {tentativas}</label>
        </div>
      </div>
  );
}

export default App;
