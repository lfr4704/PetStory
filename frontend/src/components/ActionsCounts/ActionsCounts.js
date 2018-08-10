import React from 'react';
import PropTypes from 'prop-types';


//stateless component 
const ActionsCounts = ({ action_counts }) => {
	const actionsCountHtml = (
		<div>
			<ul>
				<li>Poop:{action_counts.poop}</li>
				<li>Food:{action_counts.food}</li>
				<li>Water:{action_counts.water}</li>
				<li>Medicine:{action_counts.medicine}</li>
				<li>Pictures:{action_counts.picture}</li>
			</ul>
		</div>
	);

	return (
		<div>
			{actionsCountHtml}
		</div>
	);
};

ActionsCounts.propTypes = {
	action_counts: PropTypes.array,
};

export default ActionsCounts;