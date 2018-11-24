import React from 'react';
import PropTypes from 'prop-types';
import './ActionsCounts.css';
import Ionicon from 'react-ionicons';


// stateless component
const ActionsCounts = ({ action_counts }) => (
  <div className="actions-count-container">
    <div className="actions-icons">
      <Ionicon icon="md-trash" fontSize="25px" color="black" />
    </div>
    <div className="actions-text">
      <h4>Poop:</h4>
    </div>
    <div className="actions-count-values">
      <p>{action_counts.poop}</p>
    </div>
    <div className="actions-icons">
      <Ionicon icon="md-pizza" fontSize="25px" color="black" />
    </div>
    <div className="actions-text">
      <h4>Food:</h4>
    </div>
    <div className="actions-count-values">
      <p>{action_counts.food}</p>
    </div>
    <div className="actions-icons">
      <Ionicon icon="md-water" fontSize="25px" color="black" />
    </div>
    <div className="actions-text">
      <h4>Water:</h4>
    </div>
    <div className="actions-count-values">
      <p>{action_counts.water}</p>
    </div>
    <div className="actions-icons">
      <Ionicon icon="md-flask" fontSize="25px" color="black" />
    </div>
    <div className="actions-text">
      <h4>Meds:</h4>
    </div>
    <div className="actions-count-values">
      <p>{action_counts.medicine}</p>
    </div>
    <div className="actions-icons">
      <Ionicon icon="md-rainy" fontSize="25px" color="black" />
    </div>
    <div className="actions-text">
      <h4>Pee:</h4>
    </div>
    <div className="actions-count-values">
      <p>{action_counts.pee}</p>
    </div>
  </div>
);

ActionsCounts.propTypes = {
  action_counts: PropTypes.array,
};

export default ActionsCounts;
