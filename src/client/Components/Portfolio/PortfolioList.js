import React, { Component } from 'react';

import Card from '../Card/Card';
import portfolioInfo from './portfolioInfo.json';

import styles from './PortfolioList.css';

const PortfolioList = () => {
  return (
    <div className={ styles.root }>
      {
        portfolioInfo.map((portfolioItem, index) => (
          <Card key={ portfolioItem.name } info={ portfolioItem }/>
        ))
      }
    </div>
  )
}

// for each item in portfolioInfo, create Portfolio card
export default PortfolioList;