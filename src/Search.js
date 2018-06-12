import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

// => implicit return
// => ( denotes a multi line expression
class Search extends React.Component {
	state = {
		searchTerm: ''
	};
	handleSearchTermChange = event => {
		this.setState({
			searchTerm: event.target.value
		});
	};
	render() {
		return (
			<div className="search">
				<header>
					<h1>The Big Show</h1>
					<input
						type="text"
						placeholder="Search"
						value={this.state.searchTerm}
						onChange={this.handleSearchTermChange}
					/>
				</header>
				<div>
					{preload.shows
						.filter(
							show =>
								`${show.title} ${show.description}`
									.toUpperCase()
									.indexOf(
										this.state.searchTerm.toUpperCase()
									) > -1
						)
						.map(({ imdbID, title, year, description }, index) => (
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
		);
	}
}

export default Search;
