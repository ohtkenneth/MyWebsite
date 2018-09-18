import React, { Component } from 'react';
import styles from './Overlay.css';

import Image from './Image/Image';
import Details from './Details/Details';

const Overlay = ({ info, onRemoveOverlay }) => {
  console.log(info);
  console.log(info.mainImage);
  return (
    <div 
      id={ info.id }
      className={ styles.root } 
      onClick= { onRemoveOverlay }
    >
      <div className={ styles.content }>
        <Image imgSrc={ info.mainImage }/>
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