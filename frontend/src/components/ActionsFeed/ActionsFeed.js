import React from 'react';
import './ActionsFeed.css';
import PropTypes from 'prop-types';
import PetImages from '../PetImages/PetImages';


// stateless component
const ActionsFeed = ({ actionsFeed }) => {
  const ActionsFeedHtml = actionsFeed.map(action => (
    <main>
      <div className="container-1">
      	<div className="">
          <PetImages pets={action.pets}/>
        </div>
        <div className="box-2">
          <p>{action.time}</p>
          <p>{action.type}</p>
        </div>
        <div className="box-3">
          <img src={action.image_url}/> //icon placeholder
        </div>
        <div className="box-4">
          <p>{action.notes}</p>
        </div>
      </div>
      <hr />
    </main>
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
