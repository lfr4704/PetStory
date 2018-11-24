import React from 'react';
import './Pets.css';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';

// this was not working in this component
// const petsDisplayNames = {
//   name: 'Name',
//   weight: 'Weight(lbs)',
//   about: 'About',
// };

// stateless component
const Pets = ({ pets }) => {
  const petsHtml = pets.map(pets => (
    <div>
      <div className="pets-subheader-container">
        <div className="pets-subheader-title">
          <h1 className="pets-subheader">Pets</h1>
        </div>
        <div className="pets-subheader-edit">
          <h4 className="edit-pet">Edit</h4>
        </div>
        <div className="pets-subheader-icon">
          <Ionicon icon="md-create" fontSize="25px" color="black" />
        </div>
      </div>

      <div className="pets-profile-container">
        <div className="pets-profile-photo-box">
          <img className="pets-profile-picture" src={pets.image_url} />
        </div>
        <div className="pets-profile-details-box">
          <p>{pets.name}</p>
          <p>Age: {`${pets.age}, ${pets.gender}`}</p>
          <p>Weight(lbs): {pets.weight}</p>
        </div>
      </div>
      <br />
      <div className="pets-body-container">
        <div className="pets-body-box">
          <h2>About</h2>
          <p>{pets.about}</p>
        </div>
        <div className="pets-body-box">
          <h2>Instructions</h2>
          <p>{pets.instructions}</p>
        </div>
        <div className="pets-body-box">
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
