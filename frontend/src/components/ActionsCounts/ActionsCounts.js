import React from 'react';
import PropTypes from 'prop-types';
import './ActionsCounts.css'


//stateless component
const ActionsCounts = ({ action_counts }) => {
	return (
		<div className="">
			<ul>
				<li>Poop:{action_counts.poop}</li>
				<li>Food:{action_counts.food}</li>
				<li>Water:{action_counts.water}</li>
				<li>Medicine:{action_counts.medicine}</li>
				<li>Pictures:{action_counts.picture}</li>
			</ul>
		</div>
	);
};

ActionsCounts.propTypes = {
	action_counts: PropTypes.array,
};

export default ActionsCounts;
