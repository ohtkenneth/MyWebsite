import React, { Component } from 'react';
import style from './style.css';

const Navbar = () => {
  const scrollView = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  return (
    <div className={ style.root} >
      <h4 className={ style.link } onClick={ () => scrollView('profile') }>Profile</h4>
      <h4 className={ style.link } onClick={ () => scrollView('skills') }>Skills</h4>
      <h4 className={ style.link } onClick={ () => scrollView('portfolio') }>Portfolio</h4>
      <h4 className={ style.link } onClick={ () => scrollView('contact') }>Contact</h4>
    </div>
  )
}

export default Navbar;