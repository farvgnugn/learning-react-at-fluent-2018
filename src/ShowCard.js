import React from 'react';

//const x = 'this is a string'
//const y = `this is a different string ${x.toUpperCase()}`
// the previous line uses a template with expressions. The output is:
// this is a different string THIS IS A STRING

const ShowCard = (props) => (
	<div className="show-card">
		<img
			alt={`${props.title} show poster`}
			src="http://placecorgi.com/400/400"
		/>
		<div>
			<h3>{props.title}</h3>
			<h4>({props.year})</h4>
			<p>{props.description}</p>
		</div>
	</div>
);

export default ShowCard;