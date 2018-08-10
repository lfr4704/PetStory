import React from 'react';
import PropTypes from 'prop-types';
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
        <header className="title">
          <h1>{owner.name}</h1>
        </header>
        <div className="contact-info">
          <h2 className="sub-header">Owner Details</h2>
          <h5 className="icon">Edit</h5>
        </div>
        <div>
          <p>{owner.name}</p>
          <p>{owner.phone}</p>
          <p>{owner.email}</p>
          <p>{owner.address}</p>
          <p>{owner.info}</p>
        </div>
        <div>
          <Pets pets={owner.pets} />
        </div>
      </main>
    );
  }
}

export default Owners;
