import React from 'react';
import { Link } from 'react-router-dom';

const Red = ({ usluga, ocene }) => {
  const izracunajProsecnuOcenu = (idUsluge) => {
    const oceneUsluge = ocene.filter((ocena) => ocena.id_usluge === idUsluge);
    if (oceneUsluge.length > 0) {
      const sumaOcena = oceneUsluge.reduce((suma, ocena) => suma + ocena.ocena, 0);
      return sumaOcena / oceneUsluge.length;
    }
    return 0;
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

  const prosecnaOcena = izracunajProsecnuOcenu(usluga.id);

  return (
    <tr key={usluga.id}>
      <td style={tdStyle}>{usluga.id}</td>
      <td style={tdStyle}>{usluga.naziv}</td>
      <td style={tdStyle}>{prosecnaOcena.toFixed(2)}</td>
      <td style={tdStyle}>
        <Link to={`/usluge/${usluga.id}`} style={linkStyle}>
          Detalji
        </Link>
      </td>
    </tr>
  );
};

export default Red;
