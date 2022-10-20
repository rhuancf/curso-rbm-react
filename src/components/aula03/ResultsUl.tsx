import React from 'react'
import ListItem from './ListItem'

type ResultsUlProps ={
  ulLinks: string[]
  ulTopics: string[]
  ulState: string
  
}

export default function ResultsUl(props:ResultsUlProps) {
  return (
    <div>
        {props.ulLinks && 
        props.ulTopics && 
        props.ulTopics.map((topic, index) => 
        <ListItem meuTopic={topic} link={props.ulLinks[index]} key={index} meuEstado={props.ulState} />)}
      </div>
  )
}
