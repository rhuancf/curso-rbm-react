import React from 'react'
import Nav from './Nav'

export default function Home() {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center", width:"auto"}}>
            <h1>Bem Vindo!</h1>
            <Nav/>
        </div>
    </div>
  )
}
