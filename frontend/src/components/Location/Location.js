import React from 'react';
import PropTypes from 'prop-types';
import Actions from '../Actions/Actions';

const action = {
  type: 'food',
}

// stateless component
const Location = ({ location_coordinates }) => {
  const locationHtml = location_coordinates.map(location => (
    <div>
      <p>{location.time}</p>
      <p>long:{location.long}</p>
      <p>lat:{location.lat}</p>   
    </div>
  ));
  return (
    <div>
      <h2>Map</h2>
      {locationHtml}
      
     
    </div>
  );
};

Location.propTypes = {
  location_coordinates: PropTypes.array,
};

export default Location;