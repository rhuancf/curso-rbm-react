import React, { useState,useEffect,ChangeEvent, useRef } from 'react';
import './AppChurrasco.css';

function AppChurrasco() {
    const [input, setInput] = useState({
        input1:'',
        input2:'',
        resultado:'',
    });

    const input1Ref = useRef(null);
    const input2Ref = useRef(null);


    function handleInput(event: ChangeEvent, key:string) {
        setInput(values=>({...values, [key]: (event.target as HTMLInputElement).value}));
    }

    function handleKeyDown(event:React.KeyboardEvent){
        if(event.keyCode === 8 && !input.input2.length) {
            (input1Ref?.current as unknown as HTMLInputElement).focus();
        }
    }

    useEffect(()=>{
        if (input.input1.length === 4) {
            (input2Ref?.current as unknown as HTMLInputElement).focus();
        }

        let adultos = isNaN(parseInt(input.input1)) ?0 : parseInt(input.input1);
        let criancas = isNaN(parseInt(input.input2)) ?0 : parseInt(input.input2);

        const cerveja = ((adultos*0.6 + criancas*0.1) >= 1)? adultos*0.6 + criancas*0.1 + "L" : (adultos*0.6 + criancas*0.1)*1000 + "ml";
        const refrigerante = ((adultos*0.3 + criancas*1) >= 1)? adultos*0.3 + criancas*1 + "L" : (adultos*0.3 + criancas*1)*1000 + "ml";
        const agua = ((adultos*0.5 + criancas*0.3) >= 1)? adultos*0.5 + criancas*0.3 + "L" : (adultos*0.5 + criancas*0.3)*1000 + "ml";
        const carne = ((adultos*0.5 + criancas*0.2) >= 1)? adultos*0.5 + criancas*0.2 + "Kg" : (adultos*0.5 + criancas*0.2)*1000 + "g";

        let churrascao = 'Informe o número de adultos e crianças para gerar o Kit Churrascão';

        if(input.input1 !=='' || input.input2 !== '') {
            churrascao = `Kit Churrascão: ${carne} de carne, ${cerveja} de cerveja, ${refrigerante} de refrigerante ${agua} de agua.`
            if(input.input1 === '20' && input.input2 === '') churrascao = `${carne} de carne, da pra 20 comer?`
        }


        setInput((values)=>({...values, 'resultado': churrascao}));
    },[input.input1, input.input2])
    
  
    return (
      <div className='container'>
        <label>Numero de adultos</label>
        <input type="number" onChange={(e)=>handleInput(e, 'input1')} value={input.input1} ref={input1Ref} />
        <label>Numero de crianças</label>
        <input type="number" onKeyUp={(e)=> handleKeyDown(e)} onChange={(e)=>handleInput(e, 'input2')} value={input.input2} ref={input2Ref} />
        <p>{input.resultado}</p>
      </div>
    );
  }
  
  export default AppChurrasco;