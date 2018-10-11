import React, { Component } from 'react';
import styles from './Modal.css';

import ImageCarousel from './ImageCarousel/ImageCarousel';
import Details from './Details/Details';

const Modal = ({ info, onRemoveModal }) => {
  const removeModal = (e) => {
    // add fade out animation if e is from modal
    if (e.target.id === 'modal') {
      document.getElementById('modal').style.animation = 'fade-out 0.3s ease';
      document.getElementById('modal-card').style.animation = 'fade-out 0.3s ease';
      setTimeout(() => onRemoveModal(), 250);
    }
  };

  return (
    <div 
      // id={ info.id }
      id="modal"
      className={ styles.root } 
      onClick= { removeModal }
    >
      <div id="modal-card" className={ styles.content }>
        {/* <ImageCarousel imgSrc={ info.mainImage } images={ info.images }/> */}
        <Details name={ info.name } description={ info.description } technologies={ info.technologies } points={ info.points }/>
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

export default Modal;