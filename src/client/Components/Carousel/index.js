import React from 'react';
import style from './style.scss';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
    this.state = {
      currImage: 0,
    };
    this.handleSlide = this.handleSlide.bind(this);
  }
  handleSlide(e) {
    e.preventDefault();

    let nextImage;
    const direction = e.target.dataset.direction;

    console.log(e.target.dataset);

    if (direction === 'left') {
      if (this.state.currImage === 0) {
        nextImage = this.props.images.length - 1;
      } else {
        nextImage = this.state.currImage - 1;
      }
    } else {
      if (this.state.currImage === this.props.images.length - 1) {
        nextImage = 0;
      } else {
        nextImage = this.state.currImage + 1;
      }
    }

    this.setState({ currImage: nextImage }, () => {
      const image = document.getElementById('carousel__image');
      image.src = this.props.images[this.state.currImage];
      image.classList.remove('fade-in');
      void image.offsetWidth;
      image.classList.add('fade-in');
    });
  }
  render() {
    return (
      <div className={ style.carousel }>
        <img id="carousel__image" className={ style['carousel__item']} src={ this.props.images[0] }/>
        <div className={ style['carousel__controls']}>
          <a href="#" data-direction="left" className={ style['carousel__controls--left']} onClick={ this.handleSlide }><img data-direction="left" src={ require('../icons/arrowleft.png')}/></a>
          <a href="#" data-direction="right" className={ style['carousel__controls--right']} onClick={ this.handleSlide }><img data-direction="right" src={ require('../icons/arrowright.png')}/></a>
        </div>
      </div>
    )
  }
}

// const Carousel = ({ images }) => {
//   return (
//     <div className="carousel slide" data-ride="carousel">
//       <div className="carousel-item active">
//         <img className="d-block w-100" src={ images[0] }/>
//       </div>
//       <a class="carousel-control-prev" href="#" role="button" data-slide="prev">
//         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span class="sr-only">Previous</span>
//       </a>
//       <a class="carousel-control-next" href="#" role="button" data-slide="next">
//         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//         <span class="sr-only">Next</span>
//       </a>
//     </div>
//   );
// };

// export default Carousel;