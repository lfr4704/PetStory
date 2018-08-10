import React from 'react';
import PropTypes from 'prop-types';


// stateless component
const WalkerFeed = ({ walkerFeed }) => {
  const walkerFeedHtml = (
    <div>
    	<div>
	      <img src={walkerFeed.image_url}/>
        <p>{walkerFeed.first_name}</p>
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