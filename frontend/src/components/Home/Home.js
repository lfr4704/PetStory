import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';


class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    walker: PropTypes.object,
  };

  render() {
    return (
      <div>
        <div>
          <h1>Capture the moments that matter to your clients</h1>
        </div>
        <div>
          <img src="https://github.com/lfr4704/PetStory/blob/master/wireframes/Select%20action.png?raw=true"></img>
        </div>
      </div>
    );
  }
}

export default Home;
