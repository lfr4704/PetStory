import React from 'react';
import './WalkerDetailsBanner.css';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import CircularImage from '../CircularImage/CircularImage';

const WalkerDetailsBanner = ({ walkerFeed }) => {
  return (
    <div className='walker-details-banner large-container standard-border-bottom'>
      <div className='walker-details-banner-left-content'>
        <CircularImage imageUrl={walkerFeed.image_url} size={"60px"} />
        <p>{walkerFeed.first_name}</p>
          <div className="icon-container">
            <Ionicon icon="md-call" fontSize="25px" color="black" />
            <Ionicon icon="md-text" fontSize="25px" color="black" />
            <Ionicon icon="md-calendar" fontSize="25px" color="black" />
            <Ionicon icon="md-cart" fontSize="25px" color="black" />
          </div>
      </div>
      <p>Filter (coming soon)</p>
    </div>
  );
};

WalkerDetailsBanner.propTypes = {
  walkerFeed: PropTypes.object,
};

export default WalkerDetailsBanner;
