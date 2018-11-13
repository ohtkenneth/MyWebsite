import React, { Component } from 'react';

import Card from '../Card/index';
import Modal from '../Modal/index';
import portfolioInfo from './portfolioInfo.json';

import style from './style.scss';

class PortfolioList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // should be id of Modal
      currentModal: null,
    };
    this.onModal = this.onModal.bind(this);
    this.onRemoveModal = this.onRemoveModal.bind(this);
  }
  onModal(id) {
    console.log('card clicked', id);
    this.setState({
      currentModal: id,
    });
  }
  onRemoveModal() {
    this.setState({
      currentModal: null,
    });
  }
  render() {
    return (
      // if currentModal, render it
      <div id="portfolio" className={ style.portfolio }>
        <h3 className={ style['section-heading']}>Portfolio</h3>
        <div className={ style['portfolio__cards'] }>
        {
          portfolioInfo.map((portfolioItem, index) => (
            <Card key={ portfolioItem.name } info={ portfolioItem } onModal={ this.onModal }/>
          ))
        }
        </div>
        {
          this.state.currentModal ? (
            <Modal 
              info={ portfolioInfo.find(item => item.id === this.state.currentModal )}
              onRemoveModal={ this.onRemoveModal } 
            />
          ) : void 0
        }
      </div>
    );
  }
};

// for each item in portfolioInfo, create Portfolio card
export default PortfolioList;