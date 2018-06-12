import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

// => implicit return
// => ( denotes a multi line expression
class Search extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			searchTerm: ""
		};
		// if something is being called from outside of the component, you have to use this bind:
		this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
	}
	handleSearchTermChange (event) {
		this.setState({
			searchTerm: event.target.value
		});
	}
	render() {
		return (
		<div className="search">
			<header>
				<h1>The Big Show</h1>
				<input type="text" placeholder="Search" value={this.state.searchTerm} onChange={this.handleSearchTermChange}/>
			</header>
			<div>
				{preload.shows.map(({ imdbID, title, year, description }, index) => (
					<ShowCard
						key={imdbID}
						title={title}
						year={year}
						description={description}
						isOdd={index % 2 === 0}
					/>
				))}
			</div>
		</div>
		)}
}

export default Search;
