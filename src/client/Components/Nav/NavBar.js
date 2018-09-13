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

// const NavBar = () => {
//   return (
//     <Routes />
//   )
// }

// const Routes = () => (
//   <Router>
//     <div className={ styles.root }>
//       <MenuIcon/>
//       <Link to="/portfolio">Portfolio</Link>
//       <Link to="/profile">Profile</Link>

//       <Route exact path="/portfolio" component={ PortfolioList }/>
//       <Route exact path="/profile" component={ Profile }/>
//     </div>
//   </Router>
// )
const NavBar = () => {
  return (
    <div className={ styles.root} >
      <h2 className={ styles.link }>Portfolio</h2>
      <h2 className={ styles.link }>Profile</h2>
    </div>
  )
}

export default NavBar;