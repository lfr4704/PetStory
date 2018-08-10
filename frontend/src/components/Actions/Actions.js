import React from 'react';
import PropTypes from 'prop-types';
import Location from '../Location/Location';




//stateless component 
const Actions = ({ action }) => {
	const actionHtml = (
		<div>
			<li>{action.type}</li>
		</div>
	);

	return (
		<div>
			{actionHtml}
		</div>
	);
};


export default Actions;