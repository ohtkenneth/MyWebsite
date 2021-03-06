import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import style from './style.scss';

class ProfileSection extends Component {
  render() {
    return (
      <div id="profile" className={ style.root }>
        <div className={ style.intro }>
          <h3 className={ style.text }>Hello, my name is</h3>
          <a href="http://www.linkedin.com/in/kenneth-oh" target="_blank"><h1 className={ style['text-kenneth'] }>Kenneth.<span className={ style['text-kenneth__message'] }>Nice to meet you!</span></h1></a>
          <h3 className={ style.text }>I'm a software engineer.</h3>
        </div>
        <div className={ style.personal }>
          <p>I have a deep respect for technology and the value it provides to people everywhere. <br/> I am committed to learning new web technologies and building scalable applications that can impact people in meaningful ways.</p>
        </div>
      </div>
    );
  }
}

export default ProfileSection;