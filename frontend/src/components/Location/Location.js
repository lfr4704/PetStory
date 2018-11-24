import React from 'react';
import PropTypes from 'prop-types';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import Actions from '../Actions/Actions';

// stateless component
const Location = ({ locationCoordinates }) => {
  const locationHtml = locationCoordinates.map(location => (
    <div>
      <p>{location.time}</p>
      <p>long:{location.long}</p>
      <p>lat:{location.lat}</p>
      // having issues connecting to location_coordinates.action from 'api/walks/1/'
    </div>
  ));

  const MapWithAMarker = withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
      />
    </GoogleMap>
  ));

  return (
    <div>
      <MapWithAMarker
        containerElement={<div style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>

  );
};

Location.propTypes = {
  location_coordinates: PropTypes.array,
};


export default Location;

// {locationHtml}
