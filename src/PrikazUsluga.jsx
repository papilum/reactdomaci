import React, { useState } from 'react';
import Red from './Red';

const PrikazUsluga = ({ usluge, ocene }) => {
  const [pretraga, setPretraga] = useState('');
  const [sort, setSort] = useState(null);

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };
  const thStyle = {
    backgroundColor: '#f2f2f2',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
  };


  const inputStyle = {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };
 

  const filtriraneUsluge = usluge.filter((usluga) =>
    usluga.naziv.toLowerCase().includes(pretraga.toLowerCase())
  );

  const sortiraneUsluge = [...filtriraneUsluge].sort((a, b) => {
    if (sort === 'asc') {
      return a.cena - b.cena;
    } else if (sort === 'desc') {
      return b.cena - a.cena;
    } else {
      return 0;
    }
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Pretraga usluga..."
        value={pretraga}
        onChange={(e) => setPretraga(e.target.value)}
        style={inputStyle}
      />
      <button onClick={() => setSort('asc')}>Sortiraj po ceni (rastuće)</button>
      <button onClick={() => setSort('desc')}>Sortiraj po ceni (opadajuće)</button>
      <table style={tableStyle}>
      <thead>
          <tr>
          <th style={thStyle}>ID</th>
            <th style={thStyle}>Naziv</th>
            <th style={thStyle}>Cena</th>
            <th style={thStyle}>Prosecna ocena</th>
            <th style={thStyle}></th>
          </tr>
        </thead>
        <tbody>
          {sortiraneUsluge.map((usluga) => (
            <Red usluga={usluga} ocene={ocene} key={usluga.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrikazUsluga;
