import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding: '10px',
  };

  const linkStyle = {
    textDecoration: 'none',
    margin: '0 10px',
    color: '#333',
    fontWeight: 'bold',
  };

  return (
    <div style={navbarStyle}>
      <Link to="/" style={linkStyle}>
        Početna
      </Link>
      <Link to="/usluge" style={linkStyle}>
        Usluge
      </Link>
     
    </div>
  );
};

export default Navbar;
