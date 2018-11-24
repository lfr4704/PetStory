import React from 'react';
import './PetImages.css';
import PropTypes from 'prop-types';
import CircularImage from '../CircularImage/CircularImage';

// const PLACEHOLDER_IMAGE = 'https://cdn1.iconfinder.com/data/icons/hand-drawn/100/handdrawn_pup-512.png';
const PLACEHOLDER_IMAGE = 'https://img.huffingtonpost.com/asset/5b7fdeab1900001d035028dc.jpeg?cache=sixpwrbb1s&ops=1910_1000'

// stateless component
const PetImages = ({ pets }) => {
  const petIcons = pets.map(pet =>
    <CircularImage key={`pet-circular-image-${pet.id}`} imageUrl={pet.image_url || PLACEHOLDER_IMAGE} size="30px" />
  );
  return (
    <div style={{ display: 'flex' }}>
      {petIcons}
    </div>
  );
};

PetImages.propTypes = {
  pets: PropTypes.array,
};

export default PetImages;
