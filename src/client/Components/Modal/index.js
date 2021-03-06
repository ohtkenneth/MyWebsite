import React, { Component } from 'react';
import styles from './style.scss';
import Details from './Details/index';


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
      id="modal"
      className={ styles.modal } 
      onClick= { removeModal }
    >
      <div id="modal-card" className={ styles['modal__content'] }>
        <Details name={ info.name } description={ info.description } technologies={ info.technologies } images={ info.images } points={ info.points }/>
      </div>
    </div>
  );
};

export default Modal;