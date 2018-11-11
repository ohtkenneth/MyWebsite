import React from 'react';

const withSkill = (wrappedComponent) => {
  class HOC extends React.component {
    render() {
      return (
        <WrappedComponent 
          { ...this.props }
        />
      );
    }
  }

  return HOC;
};

module.exports = withSkill;