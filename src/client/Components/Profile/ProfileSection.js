import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './ProfileSection.css';

class ProfileSection extends Component {
  render() {
    return (
      <div id="profile">
        <Carousel showArrows={ true } infiniteLoop={ true } showThumbs={ false }>
          <div>
            <div className={ styles['carousel-item'] }>
              <h3 className={ styles.text }>Hello, my name is</h3>
              <h1 className={ styles.text }>Kenneth.</h1>
              <h3 className={ styles.text }>I'm a full-stack web developer.</h3>
            </div>
          </div>
          <div>
            <div className={ styles['carousel-item'] }>
              hello
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default ProfileSection;