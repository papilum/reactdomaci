import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Red from './Red';

const PrikazUsluga = ({ usluge, ocene }) => {
  const [pretraga, setPretraga] = useState('');

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

  const tdStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
  };

  const linkStyle = {
    textDecoration: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '4px',
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

  return (
    <div>
      <input
        type="text"
        placeholder="Pretraga usluga..."
        value={pretraga}
        onChange={(e) => setPretraga(e.target.value)}
        style={inputStyle}
      />
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Naziv</th>
            <th style={thStyle}>Cena</th>
            <th style={thStyle}>Prosecna ocena</th>
            <th style={thStyle}></th>
          </tr>
        </thead>
        <tbody>
          {filtriraneUsluge.map((usluga) => (
            <Red usluga={usluga} ocene={ocene} key={usluga.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrikazUsluga;
