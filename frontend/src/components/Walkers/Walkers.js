import React from 'react';
import PropTypes from 'prop-types';
import './Walkers.css';
import Services from '../Services/Services';
import Pets from '../Pets/Pets';
import About from '../About/About';
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
        <header className="title">
          <h1>My Profile</h1>
        </header>
        <div className="contact-info">
          <h2 className="sub-header">Contact Information</h2>
          <h5 className="icon">Edit</h5>
        </div>
        <div>
          <img src={walker.image_url} />
          <p>{`${walker.first_name} ${walker.last_name}`} </p>
          <p>{walker.phone}</p>
          <p>{walker.email}</p>
          <p>{walker.location}</p>
        </div>
        <div>
          <h2>About</h2>
          <p>{walker.about}</p>
        </div>
        <div>
          <Services services={walker.services} />
        </div>
        <FeaturedWalks featured_walks={walker.featured_walks} />
        <div>
          <Pets pets={walker.pets}/>
        </div>
      </main>
    );
  }
}

export default Walkers;
