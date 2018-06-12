import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

// => implicit return
// => ( denotes a multi line expression
const Search = () => (
	<div className="search">
		<div>
			{preload.shows.map(({ imdbID, title, year, description }) => (
				<ShowCard
					key={imdbID}
					title={title}
					year={year}
					description={description}
				/>
			))}
		</div>
	</div>
);

export default Search;
