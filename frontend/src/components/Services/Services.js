import React from 'react';
import PropTypes from 'prop-types';


const serviceDisplayNames = { //renames values in object for user views
  boarding: 'Overnight boarding',
  walking: 'Daily walks',
};


// stateless component
const Services = ({ services }) => {
  const servicesHtml = services.map(service => (//this is a for each loop for every object in stored in the object values
    <div>
      <p>{serviceDisplayNames[service.type]}</p>
      <p>Rate: ${service.rate}</p>
    </div>
  ));
  return (
    <div>
      <h2>Services</h2>
      {servicesHtml}
    </div>
  );
};

Services.propTypes = {
  services: PropTypes.array,
};

export default Services;
