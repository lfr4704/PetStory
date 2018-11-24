import React from 'react';
import PropTypes from 'prop-types';
import './Owners.css';
import Ionicon from 'react-ionicons';
import Pets from '../Pets/Pets';

class Owners extends React.Component {
  static propTypes = {
    owner: PropTypes.object,
  };

  render() {
    const { owner } = this.props;
    if (!owner) {
      return null;
    }

    return (
      <main>
        <div className="owner-header-container">
          <div className="owner-header-title">
            <h1 className="owner-header">Owner Details</h1>
          </div>
          <div className="owner-header-icons">
            <Ionicon icon="md-call" fontSize="25px" color="black" />
            <Ionicon icon="md-text" fontSize="25px" color="black" />
            <Ionicon icon="md-mail" fontSize="25px" color="black" />
          </div>
          <div className="owner-header-edit">
            <h4 className="edit-owner">Edit</h4>
          </div>
          <div className="owner-header-right-icon">
            <Ionicon icon="md-create" fontSize="25px" color="black" />
          </div>
        </div>
        <div className="owner-details-container">
          <p>{`Name: ${owner.name}`}</p>
          <p>{`Phone: ${owner.phone}`}</p>
          <p>{`Email: ${owner.email}`}</p>
          <p>{`Address: ${owner.address}`}</p>
          <p>{`Notes: ${owner.info}`}</p>
        </div>
        <div>
          <Pets pets={owner.pets} />
        </div>
      </main>
    );
  }
}

export default Owners;
