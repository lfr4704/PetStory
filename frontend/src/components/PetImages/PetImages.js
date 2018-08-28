import React from 'react';
import './PetImages.css';
import PropTypes from 'prop-types';


// stateless component
const PetImages = ({ pets }) => {
  const petUrlHtml = pets.map(pets => (//this is a for each loop for every object in stored in the object values
    <div className="pet-feed-container">
      <div className="pet-container-box">
        <img className="pet-feed-picture" src={pets.image_url}/>
      </div>
    </div>
  ));
  return (
    <div>
      {petUrlHtml}
    </div>
  );
};

PetImages.propTypes = {
  pets: PropTypes.array,
};

export default PetImages;
