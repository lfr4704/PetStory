import React from 'react';
import PropTypes from 'prop-types';


// stateless component
const FeaturedWalks = ({ featuredWalks }) => {
  const featuredWalksHtml = featuredWalks.map(featuredWalk => (
    <div>
    	<div>
	      <img src={featuredWalk.thumbnail_url}/>
      </div>
      <div>
      	<p>date: {featuredWalk.date}</p>
      </div>
    </div>
  ));
  return (
    <div>
      <h2>Featured Walks</h2>
      {featuredWalksHtml}
    </div>
  );
};

FeaturedWalks.propTypes = {
  featuredWalks: PropTypes.array,
};

export default FeaturedWalks;
