import React from 'react';
import PropTypes from 'prop-types';
import './Walkers.css';
import Ionicon from 'react-ionicons';
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
        <div className="walker-header-container">
          <div className="walker-header-title">
            <h1 className="walker-header">Walker Details</h1>
          </div>
          <div className="walker-header-edit">
            <h4 className="edit-walker">Edit</h4>
          </div>
          <div className="walker-header-right-icon">
            <Ionicon icon="md-create" fontSize="25px" color="black" />
          </div>
        </div>

        <div className="walker-profile-container">
          <div className="walker-profile-photo-box">
            <img className="walker-profile-picture" src={walker.image_url} />
          </div>
          <div className="walker-profile-details-box">
            <p>{`${walker.first_name} ${walker.last_name}`} </p>
            <p>{walker.phone}</p>
            <p>{walker.email}</p>
          </div>
        </div>
        <br />
        <div className="walker-body-container">
          <div className="walker-body-box">
            <h2>Location</h2>
            <p>{walker.location}</p>
          </div>
          <div className="walker-body-box">
            <h2>About</h2>
            <p>{walker.about}</p>
          </div>
          <div className="walker-body-services-box">
            <Services services={walker.services} />
          </div>
        </div>

        <div className="walker-featured-container">
          <div>
            <FeaturedWalks featuredWalks={walker.featured_walks} />
          </div>
        </div>

        <div>
          <Pets pets={walker.pets} />
        </div>
        <br />
        <div className="walker-calendar-container">
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
