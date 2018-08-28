import React from 'react';
import './Pets.css';
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
        <h1 className="pets-header">Pets</h1>
        <h5 className="icon">Edit</h5>
      </div>

    	<div className="pets-container-1">
        <div className="pets-box-1">
	       <img className="pets-profile-picture" src={pets.image_url}/>
        </div>
        <div className="pets-box-2">
          <p>{pets.name}</p>
  	      <p>Age: {`${pets.age}, ${pets.gender}`}</p>
  	      <p>Weight(lbs): {pets.weight}</p>
        </div>
      </div>

      <div className="pets-container-2">
        <div className="container-2-box">
          <h2>About</h2>
        	<p>{pets.about}</p>
        </div>
        <div className="container-2-box">
  	      <h2>Instructions</h2>
  	      <p>{pets.instructions}</p>
        </div>
        <div className="container-2-box">
  	      <h2>Behavior</h2>
  	      <p>{pets.behavior}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      {petsHtml}
    </div>
  );
};

Pets.propTypes = {
  pets: PropTypes.array,
};

export default Pets;
