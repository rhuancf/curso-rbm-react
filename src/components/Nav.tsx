import React from 'react';
import {Outlet,Link} from 'react-router-dom';

export default function Nav() {
  return (
    <div>
        <nav className='nav' style={{display:"flex",gap:"10px"}}>
            <Link to='/aula01' className='nav-link-active'>Aula01</Link>
            <Link to='/aula02' className='nav-link'>Aula02</Link>
            <Link to='/aula03' className='nav-link'>Aula03</Link>
        </nav>
        <Outlet/>
    </div>
  )
}
