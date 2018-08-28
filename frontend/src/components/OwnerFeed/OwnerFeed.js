import React from 'react';
import PropTypes from 'prop-types';
import WalkerFeed from '../WalkerFeed/WalkerFeed';
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
      <main>
        <div>
          <WalkerFeed walkerFeed={ownerFeed.walker} />
        </div>
        <hr />
        <div>
          <ActionsFeed actionsFeed={ownerFeed.actions} />
        </div>
      </main>
    );
  }
}

export default OwnerFeed;
