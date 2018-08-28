import React from 'react';
import './WalkerFeed.css';
import PropTypes from 'prop-types';



// stateless component
const WalkerFeed = ({ walkerFeed }) => {
  const walkerFeedHtml = (
    <div>
      <div className="header">
        <h1>PetStory</h1>
      </div>
      <div className="walker-container-1">
      	<div className="walker-box-1">
  	      <img className="profile-picture"src={walkerFeed.image_url}/>
        </div>
        <div className="walker-box-2">
          <p>{walkerFeed.first_name}</p>
        </div>
        <div className="walker-box-3">
          <h6 className="icon">Filter</h6>
        </div>
      </div>
    </div>

  );
  return (
    <div>
      {walkerFeedHtml}
    </div>
  );
};

WalkerFeed.propTypes = {
  walkerFeed: PropTypes.array,
};

export default WalkerFeed;
