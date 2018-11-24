import React from 'react';
import PropTypes from 'prop-types';
import './Walk.css';
import Ionicon from 'react-ionicons';
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
   if (!walk) {
     return null;
   }
   return (
     <main>
       <div className="walk-header">
         <h1>Featured Walks</h1>
       </div>
       <hr />

       <div className="walk-actions-container">
         <div className="walk-container-box-icon">
           <Ionicon icon="md-walk" fontSize="25px" color="black" />
         </div>
         <div className="actions-text">
           <h4>Dist:</h4>
         </div>
         <div className="walk-container-box-value">
           <p>{walk.distance}</p>
         </div>
         <div className="walk-container-box-2">
           <ActionsCounts action_counts={walk.action_counts} />
         </div>
       </div>

       <div className="container-box">
         <img src={walk.thumbnail_url} />
       </div>
       <hr />

       <div className="walk-container-2">
         <div className="container-2-box-1">
           <PetImages pets={walk.pets} />
         </div>
         <div className="container-2-box-2">
           <p>{`Walk ended: ${walk.end_time}`}</p>
         </div>
       </div>
       <hr />

       <div className="walk-container-2">
         <div className="container-2-box-1">
           <PetImages pets={walk.pets} />
         </div>
         <div className="container-2-box-2">
           <p>{walk.notes}</p>
         </div>
       </div>
       <hr />

       <div className="walk-container-2">
         <div className="container-2-box-1">
           <PetImages pets={walk.pets} />
         </div>
         <div className="container-2-box-2">
           <p>{`Walk started: ${walk.start_time}`}</p>
         </div>
       </div>
       <hr />

       <div>
         <Location location_coordinates={walk.location_coordinates} />
       </div>
     </main>
   );
 }
}


export default Walk;
