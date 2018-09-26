import React, { Component } from 'react';
import styles from './Modal.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';

import Image from './Image/Image';
import Details from './Details/Details';

const Overlay = ({ info, onRemoveOverlay }) => {
  const removeOverlay = () => {
    // add fade out animation
    document.getElementById('overlay').style.animation = 'fade-out 0.3s ease';
    document.getElementById('overlay-card').style.animation = 'fade-out 0.3s ease';
    setTimeout(() => onRemoveOverlay(), 250);
  };

  return (
    <div 
      // id={ info.id }
      id="overlay"
      className={ styles.root } 
      onClick= { removeOverlay }
    >
      <div id="overlay-card" className={ styles.content }>
        <Image imgSrc={ info.mainImage } images={ info.images }/>
        <Details name={ info.name } description={ info.description }/>
      </div>
    </div>
  );
};

// class Overlay extends Component {
//   constructor({ info }) {
//     super(info);

//     this.state = {
//       toggle: false,
//     }
//     this.toggleOverlay = this.toggleOverlay.bind(this);
//   }
//   toggleOverlay() {
//     this.setState({
//       toggle: !this.state.toggle,
//     });
//   }
//   render() {
//     return this.state.toggle ? (
//       <div 
//         id={ info.id }
//         className={ styles.root } 
//         onClick={ this.toggleOverlay }
//         >
//       </div>
//     ) : null;
//   }
// };

export default Overlay;