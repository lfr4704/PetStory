import React from 'react';
import PropTypes from 'prop-types';
import Location from '../Location/Location';

//stateless component
const Actions = ({ action }) => {
	return (
		<div>
			<li>{action.type}</li>
		</div>
	);
};


export default Actions;
