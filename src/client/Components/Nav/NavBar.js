import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import PortfolioList from '../Portfolio/PortfolioList';
import ProfileSection from '../Profile/ProfileSection';
import MenuIcon from '@material-ui/icons/menu';
import styles from './NavBar.css';

const NavBar = () => {
  const scrollView = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  return (
    <div className={ styles.root} >
      <h4 className={ styles.link } onClick={ () => scrollView('profile') }>Profile</h4>
      <h4 className={ styles.link } onClick={ () => scrollView('portfolio') }>Portfolio</h4>
      <h4 className={ styles.link } onClick={ () => scrollView('contact') }>Contact</h4>
    </div>
  )
}

export default NavBar;