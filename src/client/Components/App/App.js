import React, { Component } from 'react';
import NavBar from '../Nav/NavBar';
import VerticalContacts from '../VerticalBar/VerticalContacts';

import Button from '@material-ui/core/Button';
import styles from './App.css';
import { withStyles } from '@material-ui/core/styles';

class App extends Component {
  render() {
    return (
      <div className={ styles.App }>
        <NavBar />
        <VerticalContacts />
      </div>
    );
  }
}

export default App;
