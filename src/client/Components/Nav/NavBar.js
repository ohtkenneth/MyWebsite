import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import PortfolioList from '../Portfolio/PortfolioList';
import Profile from '../Profile/Profile';
import styles from './NavBar.css';

const NavBar = () => {
  return (
    <Routes />
  )
}

const Routes = () => (
  <Router>
    <div className={ styles.root }>
      <ul>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>

      <Route exact path="/portfolio" component={ PortfolioList }/>
      <Route exact path="/profile" component={ Profile }/>
    </div>
  </Router>
)

export default NavBar;