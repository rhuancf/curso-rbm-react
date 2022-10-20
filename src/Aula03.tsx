import React, { useState,useEffect,ChangeEvent, useRef } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import ResultsUl from './components/ResultsUl';

type RequestResult = [string, string[], string[], string[]]

type ResultsParsed = {
    topics: string[];
    links: string[]
}

function Aula03() {
    
    const [input, setInput] = useState<string>('flamengo');
    const [results, setResults] = useState<ResultsParsed>({} as ResultsParsed);
   
   async function getWikipediaData(){
    const request = await fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${input}&format=json&origin=*`);
    const data = (await request.json()) as RequestResult;
    setResults(values =>({...values, topics:data[1], links:data[3]}))
    console.log(data);
   }

   useEffect(()=>{
    input.length > 2? getWikipediaData() : setResults({} as ResultsParsed);

    },[input])
    
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",margin:"20px"}}>
            <div style={{border:"1px solid black",width:"300px",padding:"20px"}}>
                <div className="app-wiki">AppWiki</div>
                <Input type='text' placeholder='Search' onChange={(e)=> setInput(e.target.value)} value={input}/>
                <Button onClick={getWikipediaData}>Search</Button>
                <div className='list-wrapper2'>
                    <ResultsUl ulLinks={results.links} ulTopics={results.topics} ulState={input}/>
                </div>
            </div>
        </div>        
    )
  }
  
  export default Aula03;