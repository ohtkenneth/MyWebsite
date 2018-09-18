import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import PortfolioList from '../Portfolio/PortfolioList';
import Profile from '../Profile/Profile';
import MenuIcon from '@material-ui/icons/menu';
import styles from './NavBar.css';

const NavBar = () => {
  const scrollView = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  return (
    <div className={ styles.root} >
      <h3 className={ styles.link } onClick={ () => scrollView('intro') }>Profile</h3>
      <h3 className={ styles.link } onClick={ () => scrollView('portfolio') }>Portfolio</h3>
      <h3 className={ styles.link } onClick={ () => scrollView('contact') }>Contact</h3>
    </div>
  )
}

export default NavBar;