import React from 'react';
import PropTypes from 'prop-types';
import './Walk.css';
import PetImages from '../PetImages/PetImages';
import ActionsCounts from '../ActionsCounts/ActionsCounts';
import Location from '../Location/Location';
import Action from '../Actions/Actions';

class Walk extends React.Component { // eslint-disable-line react/prefer-stateless-function
 static propTypes = {
    walk: PropTypes.object,
  };

 render() {
		const { walk } = this.props;
		if(!walk){
			return null;
		}
		return(
			<main>
		    <div className="walk-header">
		      <h1>Featured Walks</h1>
		    </div>
        <hr />
        <div className="walk-container-1">
          <div className="walk-box-1">
    		    <p>Dist.(mi.): {walk.distance}</p>
          </div>
          <div className="walk-box-2">
    		    <ActionsCounts action_counts={walk.action_counts}/>
          </div>
        </div>
        <div className="container-box">
          <img src={walk.thumbnail_url}/>
        </div>
        <hr/>
        <div className="walk-container-2">
          <div className="container-2-box-1">
            <PetImages pets={walk.pets}/>
          </div>
          <div className="container-2-box-2">
  		      <p>{walk.notes}</p>
          </div>
        </div>
        <hr/>
        <div>
		      <p>{walk.start_time}</p>
		      <p>{walk.end_time}</p>
		      <Location location_coordinates={walk.location_coordinates}/>
		    </div>
	    </main>
		);
	}
}


export default Walk;
