import React from 'react';

const Nutrition = ({label, total}) => {
	return(
		<li>
			<strong>{label}:</strong> {Math.floor(total)}
		</li>
	);
};

export default Nutrition;
