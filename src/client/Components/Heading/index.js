import React from 'react';

const Heading = ({ type, text }) => {
  let heading;

  if (type === 'primary') {
    heading = (
      <h1 className={ style['heading--primary']}>
        { text }
      </h1>
    );
  } else if (type === 'secondary') {
    heading = (
      <h3 className={ style['heading--secondary']}>
        { text }
      </h3>
    );
  } else if (type === 'tertiary') {
    heading = (
      <h6 className={ style['heading--tertiary']}>
        { text }
      </h6>
    );
  } else {
    throw new Error('Error in Heading type! type prop must be primary, secondary, or tertiary');
  }

  return heading;
};

export default Heading;