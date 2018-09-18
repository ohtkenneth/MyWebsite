import React, { Component } from 'react';

import ProfileSection from '../Profile/ProfileSection';
import NavBar from '../Nav/NavBar';
import VerticalContactBar from '../VerticalBar/VerticalContactBar';
import PortfolioList from '../Portfolio/PortfolioList';
import Contact from '../Contact/Contact';

import icons from '../utils/icons';

import Button from '@material-ui/core/Button';
import styles from './App.css';
import { withStyles } from '@material-ui/core/styles';

class App extends Component {
  render() {
    return (
      <div className={ styles.root }>
        <ProfileSection />
        <NavBar />
        <VerticalContactBar />
        <PortfolioList />
        <Contact />
        <div className={ styles.wrap }>
          {/* Break site into horizontal sections */}
        </div>
      </div>
    );
  }
}

export default App;
