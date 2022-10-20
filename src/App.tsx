import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Aula03 from './aula03/Aula03';
import AppAdivinha from './aula01/AppAdivinha';
import AppChurrasco from './aula02/AppChurrasco';
import Nav from './components/Nav';
import Home from './components/Home';
import NoPage from './components/NoPage';

export default function App() {
    return(
      <div>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Nav />} />
              <Route index element={<Home />} />
              <Route path="/aula01" element={<AppAdivinha/>} />
              <Route path="/aula02" element={<AppChurrasco/>} />
              <Route path="/aula03" element={<Aula03/>} />
              <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}