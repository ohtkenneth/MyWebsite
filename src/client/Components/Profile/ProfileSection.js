import React, { Component } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './ProfileSection.css';

class ProfileSection extends Component {
  render() {
    return (
      <div id="profile" className={ styles.root }>
        {/* <Carousel showArrows={ true } infiniteLoop={ true } showThumbs={ false }>
          <div>
            <div className={ styles['carousel-item'] }>
              <h3 className={ styles.text }>Hello, my name is</h3>
              <h1 className={ styles['text-kenneth'] }>Kenneth.</h1>
              <h3 className={ styles.text }>I'm a full-stack web developer.</h3>
            </div>
          </div>
          <div>
            <div className={ styles['carousel-item'] }>
              hello
            </div>
          </div>
        </Carousel> */}
        <div className={ styles.intro }>
          <h3 className={ styles.text }>Hello, my name is</h3>
          <h1 className={ styles['text-kenneth'] }>Kenneth.</h1>
          <h3 className={ styles.text }>I'm a full-stack web developer.</h3>
        </div>
        <div className={ styles.personal }>
          <p>Maecenas tincidunt ultricies justo id luctus. Sed a diam felis. Nunc massa lacus, auctor eu sem id, vestibulum elementum lectus. Maecenas elementum a velit convallis posuere. In hac habitasse platea dictumst.</p>
        </div>
      </div>
    );
  }
}

export default ProfileSection;