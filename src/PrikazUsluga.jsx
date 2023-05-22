import React from 'react';
import { Link } from 'react-router-dom';

const PrikazUsluga = ({ usluge }) => {
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

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Naziv</th>
          <th style={thStyle}>Cena</th>
          <th style={thStyle}></th>
        </tr>
      </thead>
      <tbody>
        {usluge.map((usluga) => (
          <tr key={usluga.id}>
            <td style={tdStyle}>{usluga.naziv}</td>
            <td style={tdStyle}>{usluga.cena}</td>
            <td style={tdStyle}>
              <Link to={`/usluge/${usluga.id}`} style={linkStyle}>
                Detalji
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PrikazUsluga;
