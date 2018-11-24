import React from 'react';
import moment from 'moment';
import './ActionsFeed.css';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import PetImages from '../PetImages/PetImages';
import Location from '../Location/Location';
import WalkMapAndDetails from '../WalkMapAndDetails/WalkMapAndDetails';
import { ActionTypes } from '../../Constants';
import { stringForAction, getDisplayableTimeString } from '../../Utils';


class ActionFeedItem extends React.PureComponent {

  contentForAction = () => {
    const { action } = this.props;
    switch (action.type) {
      case ActionTypes.PICTURE:
        return <img style={{ width: '100%' }} src={action.image_url} />;
      case ActionTypes.NOTE:
        return <p>{action.notes}</p>;
      case ActionTypes.WALK_END:
        if (!action.walk_id) return null;
        return <WalkMapAndDetails walkId={action.walk_id} />;
      default:
        return null;
    }
  }

  render() {
    const { action } = this.props;
    const timeString = getDisplayableTimeString(action.time)

    return (
      <div className='action-feed-item standard-border-bottom'>
        <p className='action-feed-action-text-container'>
          <span className='label-text'>{`${timeString}`}</span>
          <span>&nbsp;-&nbsp;</span>
          <span>{stringForAction(action)}</span>
        </p>
        <div style={{ marginBottom: '10px'}}>
          <PetImages pets={action.pets} />
        </div>
        <div>{this.contentForAction()}</div>
      </div>
    );
  }
}

// stateless component
const ActionsFeed = ({ actionsFeed }) => {
  const actionsFeedHtml = actionsFeed.map(action => <ActionFeedItem key={`action-feed-item-${action.id}`} action={action} />);
  return (
    <div className='medium-container'>
      {actionsFeedHtml}
    </div>
  );
};

ActionsFeed.propTypes = {
  actionsFeed: PropTypes.array,
};

export default ActionsFeed;
