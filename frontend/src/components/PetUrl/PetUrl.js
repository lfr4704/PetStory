import React from 'react';
import PropTypes from 'prop-types';


// stateless component
const PetUrl = ({ pets }) => {
  const petUrlHtml = pets.map(pets => (//this is a for each loop for every object in stored in the object values
    <div>
      <img src={pets.image_url}/>
    </div>
  ));
  return (
    <div>
      {petUrlHtml}
    </div>
  );
};

PetUrl.propTypes = {
  pets: PropTypes.array,
};

export default PetUrl;