import React, { Component } from 'react';
import PortfolioListCard from './PortfolioListCard';

import portfolioInfo from './portfolioInfo.json';

const PortfolioList = () => {
  let portfolioCards = portfolioInfo.map((project, index) =>
    <PortfolioListCard key={index} name={project.name} info={project.info} technologies={project.technologies} img={project.img}/>
  )
  return (
    <div className="portfolio">
      { portfolioCards }
    </div>
  )
}

// for each item in portfolioInfo, create Portfolio card
export default PortfolioList;