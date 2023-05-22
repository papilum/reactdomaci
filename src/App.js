 
import { useState } from 'react';
import './App.css';
import PrikazUsluga from './PrikazUsluga';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Detalji from './Detalji';

function App() {
  const [usluge, setUsluge] = useState([
    {
      id: 1,
      naziv: 'Usluga 1',
      opis: 'Opis usluge 1',
      cena: 100,
    },
    {
      id: 2,
      naziv: 'Usluga 2',
      opis: 'Opis usluge 2',
      cena: 150,
    },
    {
      id: 3,
      naziv: 'Usluga 3',
      opis: 'Opis usluge 3',
      cena: 200,
    },
  ]);

  const [ocene, setOcene] = useState([
    {
      id: 1,
      id_usluge: 1,
      ocena: 4,
      opis: 'Dobra usluga.',
    },
    {
      id: 2,
      id_usluge: 1,
      ocena: 5,
      opis: 'Odlična usluga.',
    },
    {
      id: 3,
      id_usluge: 2,
      ocena: 3,
      opis: 'Solidna usluga.',
    },
 
  ]);
  return (
     <BrowserRouter> 
        <Navbar></Navbar>
        <Routes>
          <Route path='/usluge/:id' element={<Detalji usluge={usluge} ocene={ocene}></Detalji>}></Route>

          <Route path='/usluge' element={<PrikazUsluga usluge={usluge} ocene={ocene}></PrikazUsluga>}></Route>

        </Routes>
        
      </BrowserRouter> 
  );
}

export default App;
