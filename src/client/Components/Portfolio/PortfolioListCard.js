import React, { Component } from 'react';

const PortfolioListCard = (props) => {
  // for each of the technologies, create image element and append to portfolio card logos
  let technologyIcons = createTechIconElements(props.technologies);
  return (
    <div className="portfolio__card">
      <h4>{props.name}</h4>
      <div className="portfolio__card__tech">
        {technologyIcons}
      </div>
      <div>
        <img className="portfolio__card__img" src={props.img}/>
      </div>
    </div>
  );
};

function createTechIconElements(technologies) {
  const techIcons = {
    'angular': 'fab fa-angular',
    'react': 'fab fa-react',
    'aws': 'fab fa-aws',
    'node': 'fab fa-node-js'
  }
  // return a div housing all the icons
  // for each of the technologies
  // create an img element and append to iconsDiv
  // return technologies.map((tech, index) => {
  //   let srcString = `./icons/${tech}.png`;
  //   return <img className="portfolio__card__tech__icon" key={index} src={srcString}/>
  // });
  return technologies.map((tech, index) => {
    return (
      <span className="portfolio__card__tech__icon">
        <a className={techIcons[tech]}></a>
      </span>
    )
  })
}

export default PortfolioListCard;