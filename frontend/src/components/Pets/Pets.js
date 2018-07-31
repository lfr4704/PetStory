import React from 'react';
import PropTypes from 'prop-types';

//this was not working in this component
// const petsDisplayNames = {
//   name: 'Name',
//   weight: 'Weight(lbs)',
//   about: 'About',
// };

// stateless component
const Pets = ({ pets }) => {
  const petsHtml = pets.map(pets => (
    <div>
    	<div>
	      <p>{pets.image_url}</p>
        <p>{pets.name}</p>
	      <p>Age: {`${pets.age}, ${pets.gender}`}</p>  
	      <p>Weight(lbs): {pets.weight}</p> 
      </div>
      <div>
      	<p>About: {pets.about}</p>
      </div> 
      <div>
	      <h2>Instructions</h2>
	      <p>{pets.instructions}</p>
	      <h2>Behavior</h2>
	      <p>{pets.behavior}</p>
      </div>
    </div>
  ));
  return (
    <div>
      <h2>Pets</h2>
      {petsHtml}
    </div>
  );
};

Pets.propTypes = {
  pets: PropTypes.array,
};

export default Pets;