import React from 'react';
import PropTypes from 'prop-types';

// stateless component
const About = ({ about }) => {
  const aboutHtml = about.map(about => (
    <div>
    	<div>
	      <p>{about.about}</p>
	    </div>
    </div>
  ));
  return (
    <div>
      <h2>About</h2>
      {aboutHtml}
    </div>
  );
};

About.propTypes = {
  about: PropTypes.array,
};

export default About;