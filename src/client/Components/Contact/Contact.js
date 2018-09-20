import React, { Component } from 'react';
import styles from './Contact.css';

import HorizontalContactBar from './HorizontalBar/HorizontalContactBar';

// const Contact = () => {
//   return (
//     <div id="contact" className={ styles.root }>
//       <h2>Let's build something great.</h2>
//       <HorizontalContactBar />
//     </div>
//   );
// };

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevY: 0,
    };
    this.handleIntersection = this.handleIntersection.bind(this);
  }
  componentDidMount() {
    // add event listener for when contact element is visible
    // to trigger fade in animation
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.75,
    };
    this.observer = new IntersectionObserver(this.handleIntersection, options);
    this.observer.observe(document.querySelector('#contact'));
  }
  handleIntersection(entries, observer) {
    // trigger css animation
    console.log('nope');
    document.querySelector('#contact').style.animation = 'fade-in 1s ease';
  }
  render() {
    return (
      <div id="contact" className={ styles.root }>
        <h2>Let's build something great.</h2>
        <HorizontalContactBar />
     </div>
    );
  }
}

export default Contact;