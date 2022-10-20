import { useState, useEffect} from 'react';
import Button from '../components/aula03/Button';
import SeachInput from '../components/aula03/SearchInput';
import ResultsUl from '../components/aula03/ResultsUl';
import WikiTitle from '../components/aula03/WikiTitle';
import './Aula03.css'
import Nav from '../components/Nav';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[input])

  return (
    <div className='container'>
      <Nav/>
      <div className='wiki-box'>
        <WikiTitle/>
        <SeachInput onChange={(e)=> setInput(e.target.value)} value={input}/>
        <Button onClick={getWikipediaData}>Search</Button>
        <ResultsUl ulLinks={results.links} ulTopics={results.topics} ulState={input}/>
      </div>
    </div>        
  )
}
  
  export default Aula03;