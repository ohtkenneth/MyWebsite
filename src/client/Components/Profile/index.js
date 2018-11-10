import React, { Component } from 'react';
// import "react-responsive-carousel/lib/style/carousel.min.css";
// import "react-responsive-carousel/lib/style/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import style from './style.css';

class ProfileSection extends Component {
  render() {
    return (
      <div id="profile" className={ style.root }>
        <div className={ style.intro }>
          <h3 className={ style.text }>Hello, my name is</h3>
          <a href="http://www.linkedin.com/in/kenneth-oh" target="_blank"><h1 className={ style['text-kenneth'] }>Kenneth.</h1></a>
          <h3 className={ style.text }>I'm a full stack software engineer.</h3>
        </div>
        <div className={ style.personal }>
          <p>I reserve a deep respect for technology and the value it provides to people of all walks of life. Learning new web technologies and building scalable applications that can impact people in meaningful ways is what I live for.</p>
        </div>
      </div>
    );
  }
}

export default ProfileSection;