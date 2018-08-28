import React from 'react';
import PropTypes from 'prop-types';
import './Walkers.css';
import Services from '../Services/Services';
import Pets from '../Pets/Pets';
import FeaturedWalks from '../FeaturedWalks/FeaturedWalks';

class Walkers extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    walker: PropTypes.object,
  };

  render() {
    const { walker } = this.props;
    if (!walker) {
      return null;
    }

    return (
      <main>
        <div>
          <h1 className="walker-header">Owner Details</h1>
          <h5 className="icon">Edit</h5>
        </div>

        <div className="walker-container-1">
          <div className="walker-box-1">
            <img className="walker-profile-picture" src={walker.image_url} />
          </div>
          <div className="walker-box-2">
            <p>{`${walker.first_name} ${walker.last_name}`} </p>
            <p>{walker.phone}</p>
            <p>{walker.email}</p>
          </div>
        </div>

        <div className="walker-container-2">
          <div className="container-2-box">
            <h2>Location</h2>
              <p>{walker.location}</p>
          </div>
          <div className="container-2-box">
            <h2>About</h2>
              <p>{walker.about}</p>
          </div>
          <div className="container-2-box">
            <Services services={walker.services} />
          </div>
        </div>

        <div className="walker-container-3">
          <div>
            <FeaturedWalks featuredWalks={walker.featured_walks} />
          </div>
        </div>

        <div>
          <Pets pets={walker.pets}/>
        </div>

        <div className="walker-container-4">
          <div>
            <h2>Calendar</h2>
            <p>{walker.calendar}</p>
          </div>
        </div>
      </main>
    );
  }
}

export default Walkers;
