import React from 'react';
import PropTypes from 'prop-types';
import './FeaturedWalks.css';


// stateless component
const FeaturedWalks = ({ featuredWalks }) => {
  const featuredWalksHtml = featuredWalks.map(featuredWalk => (
    <div className="container">
      <div className="subheader">
        <h1 className="subheader-title">Featured Walks</h1>
      </div>
      <div className="featured-walk-container">
        <div className="featured-walk-box">
          <img src={featuredWalk.thumbnail_url} />
        </div>
        <div className="featured-walk-box">
          <img src={featuredWalk.thumbnail_url} />
        </div>
        <div className="featured-walk-box">
          <img src={featuredWalk.thumbnail_url} />
        </div>
      </div>
      <div className="date-label">
        <p>{`date: ${featuredWalk.date}`}</p>
      </div>
    </div>
  ));
  return (
    <div>
      {featuredWalksHtml}
    </div>
  );
};

FeaturedWalks.propTypes = {
  featuredWalks: PropTypes.array,
};

export default FeaturedWalks;
