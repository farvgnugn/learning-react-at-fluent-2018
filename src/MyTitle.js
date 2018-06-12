import React from 'react';
//import PropTypes from 'prop-types';

class MyTitle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fontWeight: 'normal'
		};
		this.toggleFontWeight = this.toggleFontWeight.bind(this);
	}

	toggleFontWeight() {
		const newFontWeight =
			this.state.fontWeight === 'bold' ? 'normal' : 'bold';
		this.setState({
			fontWeight: newFontWeight
		});
	}

	render() {
		return (
			<div>
				<h1
					onClick={this.toggleFontWeight}
					style={{
						color: this.props.color,
						fontWeight: this.state.fontWeight
					}}
				>
					{this.props.title}
				</h1>
			</div>
		);
	}
}

/*
class MyTitle extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	  fontWeight: "normal"
	};
	this.toggleFontWeight = this.toggleFontWeight.bind(this);
  }
  toggleFontWeight() {
	const newFontWeight = this.state.fontWeight === "bold" ? "normal" : "bold";
	this.setState({
	  fontWeight: newFontWeight
	});
  }
  render() {
	return ce(
	  "div",
	  {},
	  React.createElement(
		"h1",
		{
		  style: { color: this.props.color, fontWeight: this.state.fontWeight },
		  onClick: this.toggleFontWeight
		},
		this.props.title
	  )
	);
  }
}
*/
/*
MyTitle.propTypes = {
	title: PropTypes.string,
	color: PropTypes.string
};
*/

export default MyTitle;
