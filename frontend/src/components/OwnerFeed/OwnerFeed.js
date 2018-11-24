import React from 'react';
import PropTypes from 'prop-types';
import WalkerDetailsBanner from '../WalkerDetailsBanner/WalkerDetailsBanner';
import ActionsFeed from '../ActionsFeed/ActionsFeed';


class OwnerFeed extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    ownerFeed: PropTypes.object,
  };

  render() {
    const { ownerFeed } = this.props;
    if (!ownerFeed) {
      return null;
    }
    return (
      <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ marginBottom: '20px' }}>PetStory</h1>
        <WalkerDetailsBanner walkerFeed={ownerFeed.walker} />
        <ActionsFeed actionsFeed={ownerFeed.actions} />
      </div>
    );
  }
}

export default OwnerFeed;
