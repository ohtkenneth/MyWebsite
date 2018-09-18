import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './ProfileSection.css';

const ProfileSection = () => {
  return (
    <div id="profile" className={ styles.root }>
      <div id="intro">
        <h3 className={ styles.text }>Hello, my name is</h3>
        <h1 className={ styles.text }>Kenneth.</h1>
        <h3 className={ styles.text }>I'm a full-stack web developer.</h3>
      </div>
    </div>
    // <div id="profile" className={ styles.root }>
    //   <Carousel>
        // <div id="intro">
        //   <h3 className={ styles.text }>Hello, my name is</h3>
        //   <h1 className={ styles.text }>Kenneth.</h1>
        //   <h3 className={ styles.text }>I'm a full-stack web developer.</h3>
        // </div>
        // <div id="bio">
        //   This is a bio
        // </div>
    //   </Carousel>
    // </div>
  );
};

export default ProfileSection;