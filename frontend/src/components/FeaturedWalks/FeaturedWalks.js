import React from 'react';
import PropTypes from 'prop-types';


// stateless component
const FeaturedWalks = ({ featured_walks }) => {
  const featuredWalksHtml = featured_walks.map(featuredWalk => (
    <div>
    	<div>
	      <p>{featuredWalk.thumbnail_url}</p>
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