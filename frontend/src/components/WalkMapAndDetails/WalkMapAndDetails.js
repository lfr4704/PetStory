import _ from 'lodash';
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  Polyline,
} from 'react-google-maps';
import ApiClient from '../../ApiClient';
import Actions from '../Actions/Actions';
import { ActionTypes } from '../../Constants';
import { calculateCenterAndZoomForMap } from '../../Utils';



const WrappedMap = withGoogleMap(({ actions, locationCoordinates }) => {
    const walkStartIndex = _.findKey(actions, { 'type': ActionTypes.WALK_START });
    let startingLocationCoordinate = { lat: 32, long: 32 };
    if (walkStartIndex !== undefined) {
      startingLocationCoordinate = actions[walkStartIndex].location_coordinate;
    }

    const centerAndZoomLevel = calculateCenterAndZoomForMap(locationCoordinates);

    const markers = _.map(actions, (action) => {
      const locationCoordinate = action.location_coordinate;
      if (!locationCoordinate) {
        return null;
      }
      return (<Marker
          key={`action-marker-${action.id}`}
          position={{ lat: parseFloat(locationCoordinate.lat), lng: parseFloat(locationCoordinate.long) }} />
      );
    });

    const polylinePath = _.map(locationCoordinates, (locationCoordinate) => ({ lat: parseFloat(locationCoordinate.lat), lng: parseFloat(locationCoordinate.long) }));

    return (
      <GoogleMap
        defaultZoom={centerAndZoomLevel.zoomLevel}
        defaultCenter={{ lat: centerAndZoomLevel.center.lat, lng: centerAndZoomLevel.center.long }}
      >
      <Polyline
        path={polylinePath}
        options={{
          strokeColor: '#435676',
          strokeOpacity: 1,
          strokeWeight: 4,
        }}
        />
        {markers}
      </GoogleMap>
    );
});


class WalkMapAndDetails extends React.PureComponent {
  constructor(props) {
    super(props);

    const { walkId } = props;

    this.state = { walk: null };
    ApiClient.getWalkById(walkId, this.onGetWalkSuccess, this.onGetWalkFailure);
  }

  onGetWalkSuccess = (walkJson) => {
    this.setState({
      walk: walkJson,
    })
  };

  onGetWalkFailure = () => {
    console.log("Fetching walk did not work");
  }

  render() {
    const { walk } = this.state;
    if (!walk) { return null; }

    const startTimeString = moment(walk.start_time).format('h:mm a');
    const endTimeString = moment(walk.end_time).format('h:mm a');

    return (
      <div>
        <div style={{ display: 'flex', marginBottom: '5px' }}>
          <p style={{ marginRight: '15px' }}><span className='label-text'>Started at: </span>{startTimeString}</p>
          <p style={{ marginRight: '15px' }}><span className='label-text'>Ended at: </span>{endTimeString}</p>
        </div>
        <WrappedMap
          actions={walk.actions}
          containerElement={<div style={{ height: '675px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          locationCoordinates={walk.location_coordinates}
        />
      </div>
    );
  }
};

export default WalkMapAndDetails;
