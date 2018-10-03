import React, { Component } from 'react';

import ProfileSection from '../Profile/ProfileSection';
import NavBar from '../Nav/NavBar';
import VerticalContactBar from '../VerticalBar/VerticalContactBar';
import Skills from '../Skills/Skills';
import PortfolioList from '../Portfolio/PortfolioList';
import Contact from '../Contact/Contact';

import icons from '../utils/icons';

import styles from './App.css';
import { withStyles } from '@material-ui/core/styles';

class App extends Component {
  render() {
    return (
      <div className={ styles.root }>
        <ProfileSection />
        <NavBar />
        {/* <VerticalContactBar /> */}
        <Skills />
        <PortfolioList />
        <div id="contact-intersection" className={ styles['contact-intersection']}></div>
        <Contact />
        <div className={ styles.wrap }>
          {/* Break site into horizontal sections */}
        </div>
      </div>
    );
  }
}

export default App;
