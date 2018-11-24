import React from 'react';
import './CircularImage.css';
import PropTypes from 'prop-types';



const CircularImage = ({ imageUrl, size }) => {
  return (
    <div className="image-container" style={{ height: size, width: size }}>
      <img className="image-element" src={imageUrl} />
    </div>
  );
};

CircularImage.defaultProps = {
  size: '50px',
};

export default CircularImage;
