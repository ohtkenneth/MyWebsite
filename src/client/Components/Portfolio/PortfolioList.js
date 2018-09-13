import React, { Component } from 'react';

import Card from '../Card/Card';
import Overlay from '../Overlay/Overlay';
import portfolioInfo from './portfolioInfo.json';

import styles from './PortfolioList.css';

// const PortfolioList = () => {
//   return (
//     <div className={ styles.root }>
//       {
//         portfolioInfo.map((portfolioItem, index) => (
//           <Card key={ portfolioItem.name } info={ portfolioItem }/>
//         ))
//       }
//     </div>
//   )
// }
class PortfolioList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // should be id of overlay
      currentOverlay: null,
    };
    this.onOverlay = this.onOverlay.bind(this);
    this.onRemoveOverlay = this.onRemoveOverlay.bind(this);
  }
  onOverlay(id) {
    console.log('card clicked', id);
    this.setState({
      currentOverlay: id,
    });
  }
  onRemoveOverlay() {
    this.setState({
      currentOverlay: null,
    })
  }
  render() {
    return (
      // if currentOverlay, render it
      <div className={ styles.root }>
        {
          portfolioInfo.map((portfolioItem, index) => (
            <Card key={ portfolioItem.name } info={ portfolioItem } onOverlay={ this.onOverlay }/>
          ))
        }
        {
          this.state.currentOverlay ? (
            <Overlay 
              info={ portfolioInfo.find(item => item.id === this.state.currentOverlay)}
              onRemoveOverlay={ this.onRemoveOverlay } 
            />
          ) : void 0
        }
      </div>
    );
  }
};

// for each item in portfolioInfo, create Portfolio card
export default PortfolioList;