import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Goel Store</h1>
      <nav>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/men" style={styles.link}>Men</Link>
        <Link to="/women" style={styles.link}>Women</Link>
        <Link to="/kids" style={styles.link}>Kids</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  link: {
    color: '#fff',
    margin: '0 10px',
    textDecoration: 'none',
  },
};

export default Header;