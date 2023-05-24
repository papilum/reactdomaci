 
import { useState } from 'react';
import './App.css';
import PrikazUsluga from './PrikazUsluga';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Detalji from './Detalji';
import Pocetna from './Pocetna';

function App() {
  const [usluge, setUsluge] = useState([
    {
      id: 1,
      naziv: 'Dubinsko pranje enterijera',
      opis: 'Temeljito čišćenje svih površina unutar vozila, uključujući sedišta, tepihe, podove, i druge unutrašnje delove.',
      cena: 1500,
    },
    {
      id: 2,
      naziv: 'Poliranje karoserije',
      opis: 'Profesionalno poliranje i sjaj karoserije, uklanjanje ogrebotina i oživljavanje boje vozila.',
      cena: 2000,
    },
    {
      id: 3,
      naziv: 'Dubinsko pranje motora',
      opis: 'Detaljno čišćenje motora, uklanjanje prljavštine, masti i ostalih nečistoća radi poboljšane performanse i izgleda.',
      cena: 2500,
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
        <Route path='/' element={<Pocetna></Pocetna>}></Route>

          <Route path='/usluge/:id' element={<Detalji usluge={usluge} ocene={ocene} setOcene={setOcene}></Detalji>}></Route>

          <Route path='/usluge' element={<PrikazUsluga usluge={usluge} ocene={ocene}></PrikazUsluga>}></Route>

        </Routes>
        
      </BrowserRouter> 
  );
}

export default App;
