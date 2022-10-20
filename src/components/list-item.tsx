import React from 'react'

type ListItemProps ={
    link: string
    meuTopic: string
    meuEstado: string
    
}

export default function ListItem(props:ListItemProps) {
  return (
    <li>
        <a href={props.link} target='_blank' rel="noreferrer">{props.meuTopic}</a>
    </li>
  )
}
