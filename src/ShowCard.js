import React from 'react';
import { string } from 'prop-types';
import styled from 'react-emotion';

//const x = 'this is a string'
//const y = `this is a different string ${x.toUpperCase()}`
// the previous line uses a template with expressions. The output is:
// this is a different string THIS IS A STRING

// ` denotes tagged template literal
const Wrapper = styled("div")`
	width: 32%;
	border: 2px solid #333;
	border-radius: 4px;
	margin-bottom: 25px;
	padding-right: 10px;
	overflow: hidden;
`;

// example tagged template literal:
//const x = someTaggedTemplateLiteralName`have some string in here ${someExpressionHere()}`;

const ShowCard = props => (
	<Wrapper>
		<img
			alt={`${props.title} show poster`}
			src="http://placecorgi.com/400/400"
		/>
		<div>
			<h3>{props.title}</h3>
			<h4>({props.year})</h4>
			<p>{props.description}</p>
		</div>
	</Wrapper>
);
ShowCard.propTypes = {
	title: string.isRequired,
	year: string.isRequired,
	description: string.isRequired
};

export default ShowCard;
