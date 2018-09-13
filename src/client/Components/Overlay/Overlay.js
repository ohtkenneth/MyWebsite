import React, { Component } from 'react';
import styles from './Overlay.css';

const Overlay = ({ info, onRemoveOverlay }) => {
  console.log(info);
  return (
    <div 
      id={ info.id }
      className={ styles.root } 
      onClick={ onRemoveOverlay }
    >
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