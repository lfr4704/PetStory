import React from 'react';
import PropTypes from 'prop-types';
import PetUrl from '../PetUrl/PetUrl';
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
		        <header className="title">
		          <h1>Walks</h1>
		        </header>
		        <div>
		          <img src={walk.thumbnail_url}/>
		          <PetUrl pets={walk.pets}/>
		          <p>{walk.notes}</p>
		          <p>{walk.start_time}</p>
		          <p>{walk.end_time}</p>
		          <p>Distance(Mi): {walk.distance}</p>
		          <ActionsCounts action_counts={walk.action_counts}/>	
		          <Location location_coordinates={walk.location_coordinates}/>                    	          	           
		        </div>
	      	</main>
		);
	
	}

}


export default Walk;