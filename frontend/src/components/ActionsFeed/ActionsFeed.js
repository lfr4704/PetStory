import React from 'react';
import PropTypes from 'prop-types';
import PetUrl from '../PetUrl/PetUrl';


// stateless component
const ActionsFeed = ({ actionsFeed }) => {
  const ActionsFeedHtml = actionsFeed.map(action => (
    <div>
    	<div>
        <PetUrl pets={action.pets}/>
        <p>{action.time}</p>
        <p>{action.type}</p>
        <img src={action.image_url}/>
        <div>
          <p>{action.notes}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      {ActionsFeedHtml}
    </div>
  );
};

ActionsFeed.propTypes = {
  actionsFeed: PropTypes.array,
};

export default ActionsFeed;