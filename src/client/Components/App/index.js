import React, { Component } from 'react';

import ProfileSection from '../Profile/index';
import NavBar from '../Navbar/index';
import Skills from '../Skills/index';
import PortfolioList from '../Portfolio/index';
import Contact from '../Contact/index';

import style from './style.scss';
import '../sass/main.scss';

class App extends Component {
  render() {
    return (
      <div className={ style.app }>
        <ProfileSection />
        <NavBar />
        <Skills />
        <PortfolioList />
        <div id="contact-intersection" className={ style['contact-intersection']}></div>
        <Contact />
      </div>
    );
  }
}

export default App;
