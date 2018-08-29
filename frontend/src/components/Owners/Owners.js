import React from 'react';
import PropTypes from 'prop-types';
import './Owners.css';
import Pets from '../Pets/Pets';


class Owners extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
        <div className="owner-header">
          <h1>{owner.name}</h1>
        </div>
        <div className="owner-container-1">
          <div className="owner-box-1">
            <h2 className="owner-sub-header">Owner Details</h2>
          </div>
          <div className="owner-box-2">
            <h5 className="owner-icon">Edit</h5>
          </div>
        </div>
        <div className="container-box">
          <p><strong>Name:</strong> {owner.name}</p>
          <p><strong>Phone:</strong> {owner.phone}</p>
          <p><strong>Email:</strong> {owner.email}</p>
          <p><strong>Address:</strong> {owner.address}</p>
          <p><strong>Notes:</strong> {owner.info}</p>
        </div>
        <div>
          <Pets pets={owner.pets} />
        </div>
      </main>
    );
  }
}

export default Owners;
