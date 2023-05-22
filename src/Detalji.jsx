import React from 'react';
import { useParams } from 'react-router-dom';

const Detalji = ({ usluge, ocene }) => {
  const { id } = useParams();

  const usluga = usluge.find((usluga) => usluga.id === Number(id));

  const centriranDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const divStyle = {
    width: '600px',
    padding: '20px',
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
  };

  const naslovStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const opisStyle = {
    marginBottom: '10px',
  };

  const ocenaStyle = {
    marginBottom: '5px',
  };

  const prosecnaOcena = () => {
    const oceneUsluge = ocene.filter((ocena) => ocena.id_usluge === usluga.id);
    if (oceneUsluge.length > 0) {
      const sumaOcena = oceneUsluge.reduce((suma, ocena) => suma + ocena.ocena, 0);
      return (sumaOcena / oceneUsluge.length).toFixed(2);
    }
    return 0;
  };

  const renderOcenaZvezdice = (ocena) => {
    const punaZvezdica = '★';
    const praznaZvezdica = '☆';
    const ocenaZaokruzena = Math.round(ocena);
    const zvezdice = punaZvezdica.repeat(ocenaZaokruzena) + praznaZvezdica.repeat(5 - ocenaZaokruzena);
    return zvezdice;
  };

  return (
    <div style={centriranDivStyle}>
      <div style={divStyle}>
        <h2 style={naslovStyle}>{usluga.naziv}</h2>
        <p style={opisStyle}>{usluga.opis}</p>
        <p style={opisStyle}>Cena: {usluga.cena}</p>
        <h3>Ocene:</h3>
        {ocene
          .filter((ocena) => ocena.id_usluge === usluga.id)
          .map((ocena) => (
            <div key={ocena.id} style={ocenaStyle}>
              <p>  {renderOcenaZvezdice(ocena.ocena)}   {ocena.opis}  </p>
              
            </div>
          ))}
        <h3>Prosečna ocena: {prosecnaOcena()}</h3>
      </div>
    </div>
  );
};

export default Detalji;
