import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Detalji = ({ usluge, ocene,setOcene }) => {
  const { id } = useParams();

  const usluga = usluge.find((usluga) => usluga.id === Number(id));

  const [novaOcena, setNovaOcena] = useState({
    ocena: '',
    opis: '',
  });
  const [oceneUsluge, setOceneUsluge] = useState(ocene.filter((ocena) => ocena.id_usluge === usluga.id));

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
  const inputStyle = {
    width: '100%',
    marginBottom: '10px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  };
  const prosecnaOcena = () => {
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

  const handleUnesiOcenu = () => {
    if (novaOcena.ocena >= 1 && novaOcena.ocena <= 5) {
      const novaOcenaObj = {
        id: ocene.length + 1,
        id_usluge: usluga.id,
        ocena: novaOcena.ocena,
        opis: novaOcena.opis,
      };
      setOcene([...oceneUsluge, novaOcenaObj]);
      setOceneUsluge([...oceneUsluge, novaOcenaObj]);
      setNovaOcena({
        ocena: '',
        opis: '',
      });
    }
  };

  return (
    <div style={centriranDivStyle}>
      <div style={divStyle}>
        <h2 style={naslovStyle}>{usluga.naziv}</h2>
        <p style={opisStyle}>{usluga.opis}</p>
        <p style={opisStyle}>Cena: {usluga.cena}</p>
        <h3>Prosečna ocena: {prosecnaOcena()}</h3>
        <h3>Ocene:</h3>
        {oceneUsluge.map((ocena) => (
          <div key={ocena.id} style={ocenaStyle}>
            <p>  {renderOcenaZvezdice(ocena.ocena)} {ocena.opis}</p>
           
          </div>
        ))}
       
        <div>
          <label>
            Ocena:
            <input
              type="number"
              min="1"
              max="5"
              value={novaOcena.ocena}
              onChange={(e) => setNovaOcena({ ...novaOcena, ocena: Number(e.target.value) })}
              style={inputStyle}
            />
          </label>
          <br />
          <label>
            Opis:
            <textarea
              value={novaOcena.opis}
              onChange={(e) => setNovaOcena({ ...novaOcena, opis: e.target.value })}
              style={inputStyle}
            />
          </label>
          <br />
          <button onClick={handleUnesiOcenu} style={buttonStyle}>Unesi ocenu</button>
        </div>
      </div>
    </div>
  );
};

export default Detalji;
